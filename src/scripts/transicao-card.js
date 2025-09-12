document.addEventListener('DOMContentLoaded', () => {
  const HIDE_DELAY = 300; // tolerância ao sair da imagem/slot

  const slots = {
    capa: document.getElementById('slot-livros'),
    foto: document.getElementById('slot-autores'),
  };

  const defaults = {
    capa: document.getElementById('livro-default') || null,
    foto: document.getElementById('autor-default') || null,
  };

  const timers = new WeakMap();

  // utilitários
  const tipoFrom = (imgId) => imgId.split('-')[0];
  const cardIdFrom = (imgId) => {
    const [tipo, num] = imgId.split('-');
    return tipo === 'capa' ? `livro-${num}` : (tipo === 'foto' ? `autor-${num}` : null);
  };
  const templatesFor = (tipo) => {
    if (tipo === 'capa')  return Array.from(document.querySelectorAll('.container_card[id^="livro-"]'));
    if (tipo === 'foto')  return Array.from(document.querySelectorAll('.container_card[id^="autor-"]'));
    return [];
  };

  function bootstrapSlot(slot){
    slot.innerHTML = `
      <div class="slot-viewport" aria-live="polite">
        <div class="pane paneA"></div>
        <div class="pane paneB"></div>
      </div>
    `;
    const viewport = slot.querySelector('.slot-viewport');
    viewport.dataset.active = 'A';
    return { viewport, A: slot.querySelector('.paneA'), B: slot.querySelector('.paneB') };
  }

  function setPaneHTML(pane, tplEl){
    pane.innerHTML = `<div class="slot-inner">${tplEl.innerHTML}</div>`;
  }

  // mede o maior conteúdo (altura da .slot-inner) numa ghost com a mesma largura do slot
  function computeFixedHeight(slot, tplList){
    const ghost = document.createElement('div');
    ghost.className = 'cards-slot';
    ghost.style.position = 'absolute';
    ghost.style.left = '-9999px';
    ghost.style.top = '0';
    ghost.style.margin = '1.5rem 16rem';
    ghost.style.padding = '1rem 2rem';
    ghost.style.width = (slot.getBoundingClientRect().width || slot.clientWidth || 600) + 'px';
    ghost.style.visibility = 'hidden';
    ghost.style.pointerEvents = 'none';

    document.body.appendChild(ghost);

    let maxH = 0;
    for (const tpl of tplList){
      ghost.innerHTML = `<div class="slot-inner">${tpl.innerHTML}</div>`;
      const inner = ghost.querySelector('.slot-inner');
      const h = inner ? inner.offsetHeight : ghost.scrollHeight;
      if (h > maxH) maxH = h;
    }

    document.body.removeChild(ghost);
    return Math.ceil(maxH);
  }

  function crossfade(slot, htmlSourceEl){
    const viewport = slot.querySelector('.slot-viewport');
    const A = slot.querySelector('.paneA');
    const B = slot.querySelector('.paneB');
    const activeIsA = viewport.dataset.active === 'A';
    const current = activeIsA ? A : B;
    const next    = activeIsA ? B : A;

    setPaneHTML(next, htmlSourceEl);
    next.offsetHeight; // reflow
    next.classList.add('is-active');
    next.classList.remove('is-fading-out');

    current.classList.add('is-fading-out');
    current.classList.remove('is-active');

    current.addEventListener('transitionend', (e) => {
      if (e.propertyName === 'opacity'){
        current.classList.remove('is-fading-out');
      }
    }, { once: true });

    viewport.dataset.active = activeIsA ? 'B' : 'A';
  }

  function scheduleRestore(slot, tipo){
    clearTimeout(timers.get(slot));
    const t = setTimeout(() => {
      const defTpl = defaults[tipo] || templatesFor(tipo)[0];
      if (defTpl) crossfade(slot, defTpl);
    }, HIDE_DELAY);
    timers.set(slot, t);
  }

  const isMobile = () => window.matchMedia('(max-width: 600px)').matches;

  // ---------- init ----------
  ['capa','foto'].forEach(tipo => {
    const slot = slots[tipo];
    if (!slot) return;

    const { A } = bootstrapSlot(slot);

    const groupTpls = templatesFor(tipo);
    const defTpl = defaults[tipo] || groupTpls[0];
    if (!defTpl) return;

    // 1) Checa se você definiu altura no CSS...
    const cssVar = getComputedStyle(slot).getPropertyValue('--card-fixed-height').trim();

    if (!cssVar) {
      const candidates = defaults[tipo] ? [defaults[tipo], ...groupTpls] : groupTpls;
      const fixedHeight = computeFixedHeight(slot, candidates);
      slot.style.setProperty('--card-fixed-height', fixedHeight + 'px');
    }

    if (isMobile()) {
      // No mobile, NÃO mostra default: marca como "aguardando sincronização"
      slot.setAttribute('data-await', '1');
      // não injeta conteúdo agora — o Swiper chamará showCardFor no init
    } else {
      // Fora do mobile, mantém o default inicial
      setPaneHTML(A, defTpl);
      A.classList.add('is-active');
    }

    // listeners do slot (mantém/recupera default fora do mobile)
    slot.addEventListener('mouseenter', () => clearTimeout(timers.get(slot)));
    slot.addEventListener('mouseleave', () => {
      if (isMobile()) return; // no mobile não forçamos voltar ao default por hover
      scheduleRestore(slot, tipo);
    });
  });

  // imagens: mostram detalhes durante o hover (desktop/tablet)
  document.querySelectorAll('.container_capa-livro, .container_foto-autor').forEach(img => {
    const tipo  = tipoFrom(img.id);
    const slot  = slots[tipo];
    const tplId = cardIdFrom(img.id);
    const tplEl = document.getElementById(tplId);
    if (!slot || !tplEl) return;

    img.addEventListener('mouseenter', () => {
      if (isMobile()) return; // no mobile, quem manda é o Swiper
      clearTimeout(timers.get(slot));
      crossfade(slot, tplEl);
    });

    img.addEventListener('mouseleave', (e) => {
      if (isMobile()) return;
      const to = e.relatedTarget;
      if (to && slot.contains(to)) return;
      scheduleRestore(slot, tipo);
    });
  });

  // (opcional) recalcula altura fixa se você NÃO definiu no CSS e a largura mudar
  let resizeTO = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTO);
    resizeTO = setTimeout(() => {
      ['capa','foto'].forEach(tipo => {
        const slot = slots[tipo];
        if (!slot) return;
        const hasCssVar = !!getComputedStyle(slot).getPropertyValue('--card-fixed-height').trim();
        if (hasCssVar) return; // CSS manda
        const groupTpls = templatesFor(tipo);
        const candidates = defaults[tipo] ? [defaults[tipo], ...groupTpls] : groupTpls;
        if (!candidates.length) return;
        const h = computeFixedHeight(slot, candidates);
        slot.style.setProperty('--card-fixed-height', h + 'px');
      });
    }, 150);
  });

  // === Função global para mostrar o card de um <img id="..."> ===
  window.showCardFor = function showCardFor(imgId){
    try{
      const tipo  = tipoFrom(imgId);     // "capa" | "foto"
      const slot  = slots[tipo];
      const tplId = cardIdFrom(imgId);   // "livro-N" | "autor-N"
      const tplEl = document.getElementById(tplId);
      if (!slot || !tplEl) return;

      // Se por algum motivo o slot ainda não foi montado, monta agora.
      if (!slot.querySelector('.slot-viewport')) {
        bootstrapSlot(slot);
        const A = slot.querySelector('.paneA');
        setPaneHTML(A, (defaults[tipo] || tplEl));
        A.classList.add('is-active');
        slot.removeAttribute('data-await');
        return;
      }

      crossfade(slot, tplEl);
      slot.removeAttribute('data-await');
    }catch(e){
      console.warn('showCardFor falhou:', e);
    }
  };

  // === Reset/resync ao trocar de media query ===
  const mq = window.matchMedia('(max-width: 600px)');
  mq.addEventListener('change', (e) => {
    if (!e.matches) {
      // saiu do mobile → volta cada slot pro default
      ['capa','foto'].forEach(tipo => {
        const slot = slots[tipo];
        const defTpl = defaults[tipo];
        if (slot && defTpl) {
          crossfade(slot, defTpl);
          slot.removeAttribute('data-await');
        }
      });
    } else {
      // entrou no mobile → marca await e tenta sincronizar com o slide ativo atual
      ['capa','foto'].forEach(tipo => {
        const slot = slots[tipo];
        if (!slot) return;
        slot.setAttribute('data-await', '1');
      });
      // tenta sincronizar com o slide ativo (se já houver)
      document.querySelectorAll('.swiper').forEach(swEl => {
        const activeImg = swEl.querySelector('.swiper-slide-active img');
        if (activeImg && window.showCardFor) window.showCardFor(activeImg.id);
      });
    }
  });

  // Failsafe: quando a página terminar de carregar, se estivermos no mobile e ainda em "await", sincroniza
  window.addEventListener('load', () => {
    if (!isMobile()) return;
    document.querySelectorAll('.swiper').forEach(swEl => {
      const activeImg = swEl.querySelector('.swiper-slide-active img');
      if (activeImg && window.showCardFor) window.showCardFor(activeImg.id);
    });
  });

    // === Ajuste dinâmico de "Clique" ↔ "Toque" conforme viewport ===
  (function(){
    const mq = window.matchMedia('(max-width: 600px)');

    function atualizarOrientacoes(){
      const isMobile = mq.matches;
      document.querySelectorAll('.container_card_orientacao').forEach(p => {
        const card = p.closest('.container_card');
        if (!card || !card.id) return;

        // Decide se é "foto" (autores) ou "capa" (livros) pelo id do card
        const isAutor = card.id.startsWith('autor-');
        const alvo = isAutor ? 'foto' : 'capa';

        p.textContent = isMobile
          ? `Toque sobre a ${alvo} para mais detalhes.`
          : `Clique sobre a ${alvo} para mais detalhes.`;
      });
    }

    // roda agora e quando mudar o breakpoint
    atualizarOrientacoes();
    mq.addEventListener('change', atualizarOrientacoes);
  })();


});
