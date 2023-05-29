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


let menuButton = document.querySelector('.menu-button')

menuButton.addEventListener('click', function( ){
    console.log('click no button')
    document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible')
})