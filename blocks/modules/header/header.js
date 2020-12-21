import autoComplete from '@tarekraafat/autocomplete.js';
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const barNav = document.querySelector('.bar-nav');
    const asideBlock = document.querySelector('.aside-order-block');
    const body = document.body;
    const searchInput = document.querySelector('.header-search__input');
    const locationInput = document.querySelector('.header-location-popup__input');
    const footer = document.querySelector('.footer');
    /** search autocomplete */
    const searchAutoCompleteInstance = new autoComplete({
        data: {
            src: [
                ['Хирургия', 'Направление', 'https://google.com'],
                ['Дисплазия тазоберденного сустава', 'Процедура', 'https://vk.com'],
                ['Ортопедия', 'Направление', 'https://youtube.com'],
                ['Клиника Анадолу (Anadolu) в Стамбуле (Турция) большая подсказка аж в 2 строки', 'Клиника', 'https://yandex.com'],
                ['Хирургия', 'Направление', 'https://google.com'],
                ['Дисплазия тазоберденного сустава', 'Процедура', 'https://vk.com'],
                ['Ортопедия', 'Направление', 'https://youtube.com'],
                ['Клиника Анадолу (Anadolu) в Стамбуле (Турция) большая подсказка аж в 2 строки', 'Клиника', 'https://yandex.com'],
                ['Хирургия', 'Направление', 'https://google.com'],
                ['Дисплазия тазоберденного сустава', 'Процедура', 'https://vk.com'],
                ['Ортопедия', 'Направление', 'https://youtube.com'],
                ['Клиника Анадолу (Anadolu) в Стамбуле (Турция) большая подсказка аж в 2 строки', 'Клиника', 'https://yandex.com'],
                ['Хирургия', 'Направление', 'https://google.com'],
                ['Дисплазия тазоберденного сустава', 'Процедура', 'https://vk.com'],
                ['Ортопедия', 'Направление', 'https://youtube.com'],
                ['Клиника Анадолу (Anadolu) в Стамбуле (Турция) большая подсказка аж в 2 строки', 'Клиника', 'https://yandex.com'],
            ]
        },
        placeHolder: "Поиск по странам и заболеваниям",
        selector: ".header-search__input",
        resultsList: {
            render: true,
            container: source => {
                source.setAttribute("id", "search_list");
            },
            destination: ".header-search-list",
            position: "afterbegin",
            element: "div"
        },
        maxResults: 15,
        highlight: false,
        resultItem: {
            content: (data, element) => {
                element.innerHTML = `<a href="${data[2]}"><span>${data[0]}</span><span>${data[1]}</span></a>`;
            },
            element: "div"
        }
    });

    /** location autocomplete */
    new autoComplete({
        data: {
            src: [
                'Москва',
                'Санкт-Петербург',
                'Лондон',
                'Истамбул',
            ]
        },
        placeHolder: "Введите название города",
        selector: ".header-location-popup__input",
        resultsList: {
            render: true,
            container: source => {
                source.setAttribute("id", "location_list");
            },
            destination: ".header-location-popup-list__holder",
            position: "beforeend",
            element: "div",
            threshold: 0
        },
        maxResults: 10000,
        highlight: false,
        resultItem: {
            content: (data, element) => {
                element.innerHTML = `<a href="#">${data}</a>`;
            },
            element: "div"
        },
        onSelection: (feedback) => {
            if (locationInput) {
                locationInput.blur()
                locationInput.value = feedback.selection.value;
            }
        }
    });

    /** scripts for header */
    if (header) {
        if (body.getBoundingClientRect().top < -40) {
            header.classList.add('is-scrolling')
        }
        window.addEventListener('scroll', () => {
            if (body.getBoundingClientRect().top < -40) {
                header.classList.add('is-scrolling')
                if (barNav) barNav.classList.add('is-scrolling')
                if (asideBlock) asideBlock.classList.add('is-fixed')
                if (searchInput) { searchInput.setAttribute('aria-expanded', 'false') }
                if (locationInput) { locationInput.blur() }
            } else {
                header.classList.remove('is-scrolling');
                if (barNav) barNav.classList.remove('is-scrolling');
                if (asideBlock) asideBlock.classList.remove('is-fixed');
            }
            if (footer) {
                if ((body.scrollHeight - footer.clientHeight - window.pageYOffset) < footer.clientHeight) {
                    if (barNav) barNav.classList.remove('is-scrolling')
                    if (asideBlock) asideBlock.classList.remove('is-fixed')
                }
            }
        });
    }

    /** location popup */
    const locationPopup = document.querySelector('.header-location-popup');
    if (locationPopup) {
        const trigger = document.querySelectorAll('.header-bottom__city');
        if (trigger) {
            trigger.forEach(eachTrigger => {
                eachTrigger.addEventListener('click', () => {
                    if (locationInput) locationInput.focus()
                })
            })
        }
    }

    /** mobile search popup */
    const openTrigger = document.querySelector('.header-top__search');
    const closeTrigger = document.querySelector('.header-search__close');
    const searchPopup = document.querySelector('.header-search');
    if (openTrigger && closeTrigger && searchPopup) {
        openTrigger.addEventListener('click', () => {
            searchPopup.classList.add('is-opened');
            body.style.overflow = 'hidden';
        });
        closeTrigger.addEventListener('click', () => {
            searchPopup.classList.remove('is-opened');
            body.style.overflow = ''
        });
    }

    /** mobile burger */
    [...document.querySelectorAll('.header-top__burger')].forEach(each => {
        each.addEventListener('click', () => {
            if (!body.classList.contains('is-menu-opened')) {
                body.style.overflow = 'hidden';
                body.classList.add('is-menu-opened');
            } else {
                body.style.overflow = '';
                body.classList.remove('is-menu-opened');
            }
        });
    });
});