const hotelSwiper = new Swiper('.hotel-swiper', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.hotel-swiper__button--prev',
        prevEl: '.hotel-swiper__button--next',
    },
});

const reviewsSwiper = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.reviews-slider__button--next',
        prevEl: '.reviews-slider__button--prev',
    },
});