const mainvisualslide = new Swiper(".main-slide", {
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 2000,
    },
},);


const mainproductslide = new Swiper(".product-slide", {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


const maincontentslide = new Swiper(".content-slide", {
    loop: true,
    slidesPerView: "3",
    spaceBetween: 1,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
