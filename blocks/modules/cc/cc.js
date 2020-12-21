import './cc-gallery/cc-gallery';
require('fslightbox');

document.addEventListener('DOMContentLoaded', () => {
    [...document.querySelectorAll('.cc-favorite__btn')].forEach(eachCheck => {
        eachCheck.addEventListener('click', (e) => {
            e.preventDefault();
            eachCheck.classList.toggle('is-checked')
        });
    });
    [...document.querySelectorAll('.cc-descr')].forEach(eachDescr => {
        const content = eachDescr.querySelector('.cc-descr__content');
        const expander = eachDescr.querySelector('.cc-descr__expander');
        const classTgglr = (contentEl, contentParent) => {
            if (contentEl.offsetHeight > 279) {
                contentParent.classList.add('is-closed')
                contentParent.classList.add('has-expander')
            } else {
                contentParent.classList.remove('is-closed')
            };
        };
        if (content && expander) {
            classTgglr(content, eachDescr);
            window.addEventListener('resize', () => {
                if (content.scrollHeight > 279) {
                    eachDescr.classList.add('is-closed')
                    eachDescr.classList.add('has-expander')
                } else {
                    eachDescr.classList.remove('is-closed')
                    eachDescr.classList.remove('has-expander')
                };

            });
            expander.addEventListener('click', () => {
                classTgglr(content, eachDescr);
            });
        }
    });
    [...document.querySelectorAll('.cc-doctors')].forEach(eachList => {
        const toggler = eachList.querySelector('.cc-doctors__expander');
        const childrensAmount = [...eachList.querySelectorAll('.cc-doctors-list__item')];
        if (childrensAmount && toggler) {
            if (childrensAmount.length > 8) {
                eachList.classList.add('is-cutted');
                toggler.addEventListener('click', () => {
                    eachList.classList.remove('is-cutted');
                });
            }
        }
    });
    [...document.querySelectorAll('.aside-order')].forEach(eachAside => {
        const body = document.body;
        const asideBlock = eachAside.querySelector('.aside-order-block');
        const asideBlockHeight = asideBlock.offsetHeight - 100;
        window.addEventListener('scroll', () => {
            if (window.innerHeight > 600) {
                let parentYOffset = eachAside.getBoundingClientRect().top + asideBlockHeight;
                if (parentYOffset < -200 && window.innerWidth > 1250) {
                    asideBlock.classList.add('is-scrolling')
                } else {
                    asideBlock.classList.remove('is-scrolling')
                }
            }
        });
    });
    [...document.querySelectorAll('.cc-pricing')].forEach(eachPricing => {
        const pricingItems = eachPricing.querySelectorAll('.cc-pricing__item');
        const tgglLink = eachPricing.querySelector('.cc-pricing__link');
        if (tgglLink && pricingItems && pricingItems.length > 6) {
            tgglLink.addEventListener('click', () => {
                eachPricing.classList.toggle('is-opened');
            });
        }
    });
});