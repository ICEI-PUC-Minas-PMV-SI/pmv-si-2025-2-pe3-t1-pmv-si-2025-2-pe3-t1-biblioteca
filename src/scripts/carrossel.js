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

    breakpoints: {
        // telas até 599px: 3 slides
        0: {
            slidesPerView: 3,
            spacebetween: 2,
        },
        // telas a partir de 600px: 4 slides
        600: {
            slidesPerView: 4,
        },
        },

       
    });
});

