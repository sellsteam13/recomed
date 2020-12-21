import Swiper, { Scrollbar, Navigation } from 'swiper';
Swiper.use([Scrollbar, Navigation]);
document.addEventListener('DOMContentLoaded', () => {
    const catalogProgrammsModule = document.querySelectorAll('.catalog-programms');
    if (catalogProgrammsModule && catalogProgrammsModule.length > 0) {
        catalogProgrammsModule.forEach(eachModule => {
            const sliderInner = eachModule.querySelector('.catalog-programms-inner');
            const sliderScrollbar = eachModule.querySelector('.swiper-scrollbar');
            /** slider innit */
            const sliderInstance = new Swiper(sliderInner, {
                slidesPerView: 1,
                spaceBetween: 30,
                autoHeight: true,
                scrollbar: {
                    el: sliderScrollbar,
                    draggable: true,
                },
                navigation: {
                    prevEl: '.catalog-programms__arrow--prev',
                    nextEl: '.catalog-programms__arrow--next'
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2
                    }
                }
            });
        });
    }
});