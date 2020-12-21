import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {

    const ccGallery = document.querySelector('.cc-gallery');

    if (ccGallery) {
        var sliderHolder = 'empty';
        const ccGalleryWrapper = ccGallery.querySelector('.cc-gallery-inner');
        const ccGallerySlides = Array.from(ccGallery.querySelectorAll('.cc-gallery__item'));
        const counter = ccGallery.querySelector('.cc-gallery__pagination');
        const initSlider = () => {
            if (ccGalleryWrapper && ccGallerySlides) {
                ccGalleryWrapper.classList.add('swiper-wrapper');
                ccGallerySlides.map(x => x.classList.add('swiper-slide'));
                sliderHolder = new Swiper(ccGallery, {
                    slidesPerView: 1,
                    on: {
                        init: () => {
                            if (counter) {
                                counter.innerHTML = '1/' + ccGallerySlides.length
                            }
                        }
                    }
                });
                if (counter) {
                    sliderHolder.on('slideChange', function() {
                        counter.innerHTML = (sliderHolder.activeIndex + 1) + '/' + ccGallerySlides.length
                    });
                }
            }
        };

        const destroySlider = () => {
            if (ccGalleryWrapper && ccGallerySlides) {
                ccGalleryWrapper.classList.remove('swiper-wrapper');
                ccGallerySlides.map(x => x.classList.remove('swiper-slide'));
                sliderHolder.destroy(true, true);
                sliderHolder = 'empty';
            }
        }

        if (window.innerWidth < 768) {
            initSlider()
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth < 768 && typeof sliderHolder != 'object') {
                initSlider();
            } else if (window.innerWidth > 767 && typeof sliderHolder == 'object') {
                destroySlider();
            }
        });
    }

    [...document.querySelectorAll('[data-fslightbox]')].forEach(x => {
        x.addEventListener('click', () => {
            document.querySelector('.fslightbox-container').addEventListener('touchstart', handleTouchStart, false);
            document.querySelector('.fslightbox-container').addEventListener('touchmove', handleTouchMove, false);
        });
    })

});

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches ||
        evt.originalEvent.touches;
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            eventFire(document.querySelector('.fslightbox-slide-btn-container-next'), 'click')
        } else {
            eventFire(document.querySelector('.fslightbox-slide-btn-container-previous'), 'click')
        }
    }
    xDown = null;
    yDown = null;
};

function eventFire(el, etype) {
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}