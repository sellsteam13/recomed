import Swiper, { EffectFade, Autoplay } from 'swiper';
Swiper.use([EffectFade, Autoplay]);
document.addEventListener('DOMContentLoaded', () => {
    const welcomeModule = document.querySelectorAll('.welcome');
    if (welcomeModule && welcomeModule.length > 0) {
        welcomeModule.forEach(eachModule => {
            const sliderInner = eachModule.querySelector('.welcome-slider');
            const controls = Array.from(eachModule.querySelectorAll('.welcome-controls__item'));
            /** slider innit */
            const sliderInstance = new Swiper(sliderInner, {
                slidesPerView: 1,
                effect: 'fade',
                autoHeight: true,
                autoplay: {
                    delay: 5000
                },
                fadeEffect: {
                    crossFade: true
                }
            });
            if (controls && controls.length > 0) {
                /** giving active class to active control */
                controls[sliderInstance.activeIndex].classList.add('is-active');
                /** class changer */
                const setActiveClass = (currEl) => {
                    controls.map(el => el != currEl ? el.classList.remove('is-active') : el)
                    currEl.classList.add('is-active')
                };
                /** change slide on mouseEnter event */
                controls.forEach(eachControl => {
                    eachControl.addEventListener('mouseenter', () => {
                        sliderInstance.slideTo(controls.indexOf(eachControl))
                    })
                    eachControl.addEventListener('click', () => {
                        sliderInstance.slideTo(controls.indexOf(eachControl))
                    })
                });
                /** change slide & class on slideChange  */
                sliderInstance.on('slideChange', () => {
                    let index = sliderInstance.activeIndex;
                    setActiveClass(controls[index])
                })
            }
        });
    }
});