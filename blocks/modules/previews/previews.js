import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
document.addEventListener('DOMContentLoaded', () => {
    const previewsModule = document.querySelectorAll('.previews');
    if (previewsModule && previewsModule.length > 0) {
        previewsModule.forEach(eachModule => {
            const sliderInner = eachModule.querySelector('.previews-slider');
            const sliderPrev = eachModule.querySelector('.previews-controls__arrow--prev');
            const sliderNext = eachModule.querySelector('.previews-controls__arrow--next');
            /** slider innit */
            const sliderInstance = new Swiper(sliderInner, {
                slidesPerView: 5,
                spaceBetween: 30,
                navigation: {
                    prevEl: sliderPrev,
                    nextEl: sliderNext,
                    disabledClass: 'is-disabled'
                },
                breakpoints: {
                    1251: {
                        slidesPerView: 5,
                    },
                    768: {
                        slidesPerView: 'auto',
                    }
                }
            });
        });
    }
});