$(function () {


    $('.menu-opener').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.navbar').toggleClass('active');
    });

    var swiper3 = new Swiper(".dino-slide", {
        slidesPerView: 10,
        spaceBetween: 10,
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            240: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 6,
            },
            1024: {
                slidesPerView: 12,
            },
        },
    });

});

