import { telephoneInput, numberCheck, numberCheckInline } from "./telephone";
import { emailCheck, emailCheckInline } from "./email";

// TELEPHONE

const telInput = document.querySelector("#tel");
const telMessage = document.querySelector(".message.telephone");

const iti = telephoneInput(telInput);
function checkNumber() {
    return numberCheck(iti, telInput, telMessage);
}
function checkNumberInline() {
    return numberCheckInline(iti, telInput, telMessage);
}

telInput.addEventListener("input", () => {
    checkNumberInline();
});

telInput.addEventListener("countrychange", () => {
    checkNumberInline();
});

telInput.addEventListener("blur", () => {
    setTimeout(() => {
        if (
            document.activeElement !=
            document.querySelector(".iti__selected-flag")
        ) {
            checkNumber();
        }
    }, 20);
});

// EMAIL

const emailInput = document.querySelector("#email");
const emailMessage = document.querySelector(".message.email");

function checkEmail() {
    return emailCheck(emailInput, emailMessage);
}
function checkEmailInline() {
    return emailCheckInline(emailInput, emailMessage);
}

emailInput.addEventListener("blur", () => {
    checkEmail();
});
emailInput.addEventListener("input", () => {
    checkEmailInline();
});

// SUBMIT

const submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", (e) => {
    if (checkEmail() && checkNumber()) {
        console.log("alt ok");
    } else {
        e.preventDefault();
        console.log("noe feil");
    }
    const number = iti.getNumber();
    const countryCode = iti.getSelectedCountryData().dialCode;
    console.log("Landskode: " + countryCode);
    console.log("Nummer: " + number);
    console.log("Nummer clean: " + number.replace(`+${countryCode}`, ""));

    console.log("error " + iti.getValidationError());
    console.log(intlTelInputUtils.validationError);

});