import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import $ from "jquery";

$(() => {
    const feedbacksSlider = new Swiper(".feedbacks__slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
        },

        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },

        navigation: {
            prevEl: ".feedbacks__slider-btn_prev",
            nextEl: ".feedbacks__slider-btn_next",
        },

        pagination: {
            el: ".feedbacks__pagination",
        },
    });

    const servicesSlider = new Swiper(".services__slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
        },

        breakpoints: {
            800: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            },
            1550: {
                slidesPerView: 4,
            },
        },

        pagination: {
            el: ".services__pagination",
        }
    });

    const partnersSlider = new Swiper(".partners__slider", {
        slidesPerView: 2,
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
        },

        breakpoints: {
            
        },

        pagination: {
            el: ".partners__pagination",
        }
    });

    const projectSlider = new Swiper(".project-gallery__slider", {
        slidesPerView: 3,
        direction: "vertical",
        spaceBetween: 10,

        breakpoints: {
            
        },

        navigation: {
            prevEl: ".project-gallery__slider-btn_prev",
            nextEl: ".project-gallery__slider-btn_next",
        },
    });
});
