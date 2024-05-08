const mainvisualslide = new Swiper(".main-slide", {
    speed: 1500,
    loop: true,
    // autoplay: {
    //     delay: 1500,
    // },
},);

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

const mainproductslide = new Swiper(".product-slide", {
    scrollbar: {
        el: ".swiper-scrollbar",
        // hide: true,
    },
});