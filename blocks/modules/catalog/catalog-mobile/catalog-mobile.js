import Choices from 'choices.js';
document.addEventListener('DOMContentLoaded', () => {
    /** disable/enable body scrolling functions for ios */
    const $body = document.querySelector('body');
    let scrollPosition = 0;

    function enable() {
        window.scrollPosition = window.pageYOffset;
        $body.style.overflow = 'hidden';
        $body.style.position = 'fixed';
        $body.style.top = `0`;
        $body.style.width = '100%';
    };

    function disable() {
        $body.style.removeProperty('overflow');
        $body.style.removeProperty('position');
        $body.style.removeProperty('top');
        $body.style.removeProperty('width');
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }
    [...document.querySelectorAll('.catalog-mobile__item select')].forEach(eachSelect => {
        const customFilter = new Choices(eachSelect, {
            noResultsText: eachSelect.dataset.empty,
            searchEnabled: true,
            searchPlaceholderValue: 'Начните набирать слово...'
        });
        eachSelect.addEventListener('hideDropdown', () => {
            disable()
        })
        eachSelect.addEventListener('showDropdown', () => {
            setTimeout(() => {
                enable();
                setTimeout(() => {
                    const input = eachSelect.parentNode.parentNode.querySelector('input');
                    if (input) input.focus()
                }, 100)
            }, 0)
        })
    });
})