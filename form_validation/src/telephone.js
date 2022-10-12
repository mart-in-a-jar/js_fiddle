import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";


const telephoneInput = (element) => {

    return intlTelInput(element, {
        utilsScript: "../node_modules/intl-tel-input/build/js/utils.js",
        preferredCountries: [
            "no"
        ]
    });

}


export { telephoneInput }