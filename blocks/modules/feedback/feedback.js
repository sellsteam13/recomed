document.addEventListener('DOMContentLoaded', () => {
    [...document.querySelectorAll('.tabs__item')].forEach(eachList => {
        const toggler = eachList.querySelector('.feedback-list-more .def__link');
        const childrensAmount = [...eachList.querySelectorAll('.feedback-item')];
        if (childrensAmount && toggler) {
            if (childrensAmount.length > 3) {
                eachList.classList.add('is-cutted');
                toggler.addEventListener('click', () => {
                    eachList.classList.remove('is-cutted');
                });
            }
        }
    });
});