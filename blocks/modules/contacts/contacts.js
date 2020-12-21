document.addEventListener('DOMContentLoaded', () => {
    const contactsMap = document.querySelector('.contacts-map');
    if (contactsMap) {
        const contactsMapSwitchers = [...contactsMap.querySelectorAll('.contacts-map-switchers__item')];
        contactsMapSwitchers[0].addEventListener('click', () => {
            contactsMap.classList.remove('is-switched');
            contactsMapSwitchers[1].classList.remove('is-active');
            contactsMapSwitchers[0].classList.add('is-active');
        });
        contactsMapSwitchers[1].addEventListener('click', () => {
            contactsMap.classList.add('is-switched');
            contactsMapSwitchers[0].classList.remove('is-active');
            contactsMapSwitchers[1].classList.add('is-active');
        });
    }
});