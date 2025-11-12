// transicao-card.js — compatível com: capa / foto / p (simplificado)

document.addEventListener('DOMContentLoaded', () => {
  const HIDE_DELAY = 300
  const MOBILE_MQ  = '(max-width: 600px)'

  // --- Slots e defaults por grupo ---
  const slots = {
    capa: document.getElementById('slot-livros'),
    foto: document.getElementById('slot-autores'),
    p:    document.getElementById('p-slot-livros'),
  }

  const defaults = {
    capa: document.getElementById('livro-default') || null,
    foto: document.getElementById('autor-default') || null,
    p:    document.getElementById('p-livro-default') || null,
  }

  const timers = new WeakMap()
  const isMobile = () => window.matchMedia(MOBILE_MQ).matches

  // ---------- Helpers ----------
  function groupFromImg(img){
    if (!img || !img.id) return null

    // Ids canônicos
    if (img.id.startsWith('capa-'))     return 'capa'
    if (img.id.startsWith('foto-'))     return 'foto'
    if (img.id.startsWith('p-capa-'))   return 'p'

    // Fallback por container (âncora do carrossel p)
    if (img.closest('.p-ancoras-capas-index') || img.closest('.p-ancora-capas-index')) return 'p'

    // Fallback por classes conhecidas
    if (img.classList.contains('container_foto-autor')) return 'foto'
    if (img.classList.contains('container_capa-livro')) return 'capa'

    return null
  }

  function cardIdFromImg(img){
    const grp = groupFromImg(img)
    if (!grp) return null

    if (grp === 'capa'){
      const m = img.id.match(/^capa-(\d+)$/)
      return m ? `livro-${m[1]}` : null
    }
    if (grp === 'foto'){
      const m = img.id.match(/^foto-(\d+)$/)
      return m ? `autor-${m[1]}` : null
    }
    if (grp === 'p'){
      const m = img.id.match(/^p-capa-(\d+)$/)
      if (m) return `p-livro-${m[1]}`
      // Fallback: permitir <a class="p-ancoras-capas-index" data-card="N">
      const a = img.closest('a.p-ancoras-capas-index, a.p-ancora-capas-index')
      if (a && a.dataset.card){
        const idx = String(Number(a.dataset.card))
        if (idx && idx !== 'NaN') return `p-livro-${idx}`
      }
      return null
    }
    return null
  }

  function templatesFor(group){
    if (group === 'capa') return Array.from(document.querySelectorAll('.container_card[id^="livro-"]'))
    if (group === 'foto') return Array.from(document.querySelectorAll('.container_card[id^="autor-"]'))
    if (group === 'p')    return Array.from(document.querySelectorAll('.container_card[id^="p-livro-"]'))
    return []
  }

  function bootstrapSlot(slot){
    slot.innerHTML = `
      <div class="slot-viewport" aria-live="polite">
        <div class="pane paneA"></div>
        <div class="pane paneB"></div>
      </div>
    `
    const viewport = slot.querySelector('.slot-viewport')
    viewport.dataset.active = 'A'
    return { viewport, A: slot.querySelector('.paneA'), B: slot.querySelector('.paneB') }
  }

  function setPaneHTML(pane, tplEl){
    pane.innerHTML = `<div class="slot-inner">${tplEl.innerHTML}</div>`
  }

  function crossfade(slot, htmlSourceEl){
    const viewport = slot.querySelector('.slot-viewport')
    const A = slot.querySelector('.paneA')
    const B = slot.querySelector('.paneB')
    const activeIsA = viewport.dataset.active === 'A'
    const current = activeIsA ? A : B
    const next    = activeIsA ? B : A

    setPaneHTML(next, htmlSourceEl)
    void next.offsetHeight // reflow
    next.classList.add('is-active')
    next.classList.remove('is-fading-out')

    current.classList.add('is-fading-out')
    current.classList.remove('is-active')

    current.addEventListener('transitionend', (e) => {
      if (e.propertyName === 'opacity') current.classList.remove('is-fading-out')
    }, { once:true })

    viewport.dataset.active = activeIsA ? 'B' : 'A'
  }

  function scheduleRestore(slot, group){
    clearTimeout(timers.get(slot))
    const t = setTimeout(() => {
      const defTpl = defaults[group] || templatesFor(group)[0]
      if (defTpl) crossfade(slot, defTpl)
    }, HIDE_DELAY)
    timers.set(slot, t)
  }

  // Mede a maior altura dentre os templates (para fixar viewport)
  function computeFixedHeight(slot, tplList){
    const ghost = document.createElement('div')
    ghost.className = 'cards-slot'
    ghost.style.position = 'absolute'
    ghost.style.left = '-9999px'
    ghost.style.top = '0'
    ghost.style.margin = '1.5rem 16rem'
    ghost.style.padding = '1rem 2rem'
    ghost.style.width = (slot.getBoundingClientRect().width || slot.clientWidth || 600) + 'px'
    ghost.style.visibility = 'hidden'
    ghost.style.pointerEvents = 'none'

    document.body.appendChild(ghost)

    let maxH = 0
    for (const tpl of tplList){
      ghost.innerHTML = `<div class="slot-inner">${tpl.innerHTML}</div>`
      const inner = ghost.querySelector('.slot-inner')
      const h = inner ? inner.offsetHeight : ghost.scrollHeight
      if (h > maxH) maxH = h
    }

    document.body.removeChild(ghost)
    return Math.ceil(maxH)
  }

  // ---------- Init por grupo ----------
  ['capa','foto','p'].forEach(group => {
    const slot = slots[group]
    if (!slot) return

    const { A } = bootstrapSlot(slot)

    const groupTpls = templatesFor(group)
    const defTpl    = defaults[group] || groupTpls[0]
    if (!defTpl) return

    // Ajuste de altura fixa se CSS não definiu var
    const cssVar = getComputedStyle(slot).getPropertyValue('--card-fixed-height').trim()
    if (!cssVar){
      const candidates = defaults[group] ? [defaults[group], ...groupTpls] : groupTpls
      const fixedHeight = computeFixedHeight(slot, candidates)
      slot.style.setProperty('--card-fixed-height', fixedHeight + 'px')
    }

    if (isMobile()){
      slot.setAttribute('data-await', '1') // Swiper vai sincronizar
    } else {
      setPaneHTML(A, defTpl)
      A.classList.add('is-active')
    }

    // manter/restore default por hover (desktop)
    slot.addEventListener('mouseenter', () => clearTimeout(timers.get(slot)))
    slot.addEventListener('mouseleave', () => {
      if (isMobile()) return
      scheduleRestore(slot, group)
    })
  })

  // ---------- Hover/foco nas imagens ----------
  // cobrimos: capas comuns, capas do grupo p e fotos de autores
  document.querySelectorAll('.container_capa-livro, .p-container_capa-livro, .container_foto-autor')
    .forEach(img => {
      const group = groupFromImg(img)
      const slot  = group ? slots[group] : null
      const tplId = cardIdFromImg(img)
      const tplEl = tplId ? document.getElementById(tplId) : null
      if (!slot || !tplEl) return

      // desktop/tablet: hover mostra card
      img.addEventListener('mouseenter', () => {
        if (isMobile()) return
        clearTimeout(timers.get(slot))
        crossfade(slot, tplEl)
      })

      // acessibilidade por teclado
      img.addEventListener('focus', () => {
        if (isMobile()) return
        clearTimeout(timers.get(slot))
        crossfade(slot, tplEl)
      })

      img.addEventListener('mouseleave', (e) => {
        if (isMobile()) return
        const to = e.relatedTarget
        if (to && slot.contains(to)) return
        scheduleRestore(slot, group)
      })

      img.addEventListener('blur', () => {
        if (isMobile()) return
        scheduleRestore(slot, group)
      })
    })

  // ---------- Recalcular altura ao redimensionar (quando sem var no CSS) ----------
  let resizeTO = null
  window.addEventListener('resize', () => {
    clearTimeout(resizeTO)
    resizeTO = setTimeout(() => {
      ['capa','foto','p'].forEach(group => {
        const slot = slots[group]
        if (!slot) return
        const hasCssVar = !!getComputedStyle(slot).getPropertyValue('--card-fixed-height').trim()
        if (hasCssVar) return
        const groupTpls = templatesFor(group)
        const candidates = defaults[group] ? [defaults[group], ...groupTpls] : groupTpls
        if (!candidates.length) return
        const h = computeFixedHeight(slot, candidates)
        slot.style.setProperty('--card-fixed-height', h + 'px')
      })
    }, 150)
  })

  // ---------- API global para sincronizar via Swiper ----------
  window.showCardFor = function showCardFor(imgId){
    try{
      const img = document.getElementById(imgId)
      if (!img) return

      const group = groupFromImg(img)
      const slot  = group ? slots[group] : null
      const tplId = cardIdFromImg(img)
      const tplEl = tplId ? document.getElementById(tplId) : null
      if (!slot || !tplEl) return

      if (!slot.querySelector('.slot-viewport')){
        const { A } = bootstrapSlot(slot)
        setPaneHTML(A, (defaults[group] || tplEl))
        A.classList.add('is-active')
        slot.removeAttribute('data-await')
        return
      }

      crossfade(slot, tplEl)
      slot.removeAttribute('data-await')
    }catch(e){
      console.warn('showCardFor falhou:', e)
    }
  }

  // ---------- Media query enter/leave ----------
  const mq = window.matchMedia(MOBILE_MQ)
  mq.addEventListener('change', (e) => {
    if (!e.matches){
      // Saiu do mobile → volta cada slot pro default
      ['capa','foto','p'].forEach(group => {
        const slot = slots[group]
        const defTpl = defaults[group]
        if (slot && defTpl){
          crossfade(slot, defTpl)
          slot.removeAttribute('data-await')
        }
      })
    } else {
      // Entrou no mobile → marca await e tenta sincronizar com slides ativos
      ['capa','foto','p'].forEach(group => {
        const slot = slots[group]
        if (slot) slot.setAttribute('data-await','1')
      })
      document.querySelectorAll('.swiper').forEach(swEl => {
        const activeImg = swEl.querySelector('.swiper-slide-active img')
        if (activeImg && window.showCardFor) window.showCardFor(activeImg.id)
      })
    }
  })

  // ---------- Failsafe no load (mobile) ----------
  window.addEventListener('load', () => {
    if (!isMobile()) return
    document.querySelectorAll('.swiper').forEach(swEl => {
      const activeImg = swEl.querySelector('.swiper-slide-active img')
      if (activeImg && window.showCardFor) window.showCardFor(activeImg.id)
    })
  })

  // ---------- Ajuste "Clique/Toque" ----------
  (function(){
    const mq = window.matchMedia(MOBILE_MQ)

    function atualizarOrientacoes(){
      const mobile = mq.matches
      document.querySelectorAll('.container_card_orientacao').forEach(p => {
        const card = p.closest('.container_card')
        if (!card || !card.id) return

        // autor-X → "foto", senão → "capa" (inclui p-livro-X)
        const alvo = card.id.startsWith('autor-') ? 'foto' : 'capa'
        p.textContent = mobile
          ? `Toque sobre a ${alvo} para mais detalhes.`
          : `Clique sobre a ${alvo} para mais detalhes.`
      })
    }

    atualizarOrientacoes()
    mq.addEventListener('change', atualizarOrientacoes)
  })()

})
