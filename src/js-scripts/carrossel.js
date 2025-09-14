// --- helper: só sincroniza no mobile (≤ 600px)
const shouldSyncCards = () => window.matchMedia('(max-width: 600px)').matches;

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".swiper").forEach((element) => {

    const sw = new Swiper(element, {
      spaceBetween: 30,
      slidesPerView: 3,
      navigation: {
        nextEl: element.querySelector('.swiper-button-next'),
        prevEl: element.querySelector('.swiper-button-prev'),
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          centeredSlides: true,
          initialSlide: 2,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 4,
          centeredSlides: false,
        },
      },
      on: {
        init(sw){
          if (!shouldSyncCards()) return;
          const img = sw.slides[sw.activeIndex]?.querySelector('img');
          if (img && window.showCardFor) window.showCardFor(img.id);
        },
        slideChange(sw){
          if (!shouldSyncCards()) return;
          const img = sw.slides[sw.activeIndex]?.querySelector('img');
          if (img && window.showCardFor) window.showCardFor(img.id);
        },
        // se mudar de breakpoint (ex: virou mobile), re-sincroniza
        breakpoint(sw){
          if (!shouldSyncCards()) return;
          const img = sw.slides[sw.activeIndex]?.querySelector('img');
          if (img && window.showCardFor) window.showCardFor(img.id);
        },
        // em alguns temas, o activeIndex só “firma” no fim da transição
        slideChangeTransitionEnd(sw){
          if (!shouldSyncCards()) return;
          const img = sw.slides[sw.activeIndex]?.querySelector('img');
          if (img && window.showCardFor) window.showCardFor(img.id);
        }
      }
    });

    // garantia extra: ao redimensionar para mobile, sincroniza o card atual
    window.addEventListener('resize', () => {
      if (!shouldSyncCards()) return;
      const img = sw.slides[sw.activeIndex]?.querySelector('img');
      if (img && window.showCardFor) window.showCardFor(img.id);
    });
  });
});
