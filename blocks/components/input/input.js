import intlTelInput from 'intl-tel-input';
import Inputmask from "inputmask";

document.addEventListener('DOMContentLoaded', () => {
    [...document.querySelectorAll('.def-input.is-tel')].forEach(x => {
        intlTelInput(x, {
            initialCountry: "ru",
            onlyCountries: ["ru", "kz"]
        });
        Inputmask({ "mask": "+7 (999) 999-99-99" }).mask(x);
    })
})