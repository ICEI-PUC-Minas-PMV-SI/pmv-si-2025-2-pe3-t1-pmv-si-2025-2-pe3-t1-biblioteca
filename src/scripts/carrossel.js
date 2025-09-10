document.querySelectorAll(".swiper").forEach((element) => {
    
    new Swiper(element, {
    // speed: 400,
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
    });
});

