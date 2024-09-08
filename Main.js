document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1, // Number of slides to show at once
        spaceBetween: 20, // Space between slides
        breakpoints: {
            640: {
                slidesPerView: 2, // Number of slides on screens >= 640px
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3, // Number of slides on screens >= 768px
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4, // Number of slides on screens >= 1024px
                spaceBetween: 30,
            },
        },
    });
});
