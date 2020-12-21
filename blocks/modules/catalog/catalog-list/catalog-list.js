document.addEventListener('DOMContentLoaded', () => {
    [...document.querySelectorAll('.card-footer__favorite')].forEach(eachCheck => {
        eachCheck.addEventListener('click', (e) => {
            e.preventDefault();
            eachCheck.classList.toggle('is-checked')
        });
    });
});