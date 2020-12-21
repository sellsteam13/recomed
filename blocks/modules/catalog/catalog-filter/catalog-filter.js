document.addEventListener('DOMContentLoaded', () => {
    [...document.querySelectorAll('.catalog-filter-item')].forEach(eachItem => {
        const filterItemToggler = eachItem.querySelector('.catalog-filter-item__expand');
        const filterItemSearch = eachItem.querySelector('.catalog-filter-item__search input');
        const filterItemOptionsList = eachItem.querySelectorAll('.catalog-filter-item-content__option > span:not(.radio-check):not(.checkbox-check)')
        if (filterItemToggler) {
            filterItemToggler.addEventListener('click', (e) => {
                e.preventDefault();
                eachItem.classList.toggle('is-opened');
            });
        }
        if (filterItemSearch && filterItemOptionsList && filterItemOptionsList.length > 0) {
            filterItemSearch.addEventListener('input', () => {
                let currQuery = filterItemSearch.value.toLowerCase();
                filterItemOptionsList.forEach(eachOption => {
                    let optionSring = eachOption.textContent.toLowerCase();
                    if (!optionSring.includes(currQuery) && currQuery.length > 0) {
                        eachOption.parentNode.classList.add('is-hidden')
                    } else {
                        eachOption.parentNode.classList.remove('is-hidden')
                    }
                });
            });
        }
    });
    const tabletFilterTggl = document.querySelector('.catalog-heading-manage__btn');
    const filter = document.querySelector('.catalog-filter');
    if (tabletFilterTggl && filter) {
        tabletFilterTggl.addEventListener('click', () => {
            if (!filter.classList.contains('is-opened')) {
                filter.classList.add('is-opened')
                document.body.style.overflow = 'hidden'
            } else {
                filter.classList.remove('is-opened')
                document.body.style.overflow = ''
            }
        });
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('catalog-filter') && filter.classList.contains('is-opened')) {
                filter.classList.remove('is-opened')
                document.body.style.overflow = ''
            }
        });
    }
});