import { telephoneInput, numberCheck, numberCheckInline } from "./telephone";
import { emailCheck, emailCheckInline } from "./email";
import { countryCheck, populateCountries } from "./country";
import { zipCheck, zipCheckInline } from "./zip";

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
    countryInput.value = iti.getSelectedCountryData().iso2;
    checkZip();
});

telInput.addEventListener("blur", () => {
    iti.setNumber(iti.getNumber());
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

// COUNTRY

const countryInput = document.querySelector("#country");
const countryMessage = document.querySelector(".message.country");

populateCountries(countryInput);
// Set initial value to same as default for telephone (if it exists)
if (iti.getSelectedCountryData().iso2) {
    countryInput.value = iti.getSelectedCountryData().iso2;
} else {
    countryInput.value = "no";
}

function checkCountry() {
    return countryCheck(countryInput, countryMessage);
}

countryInput.addEventListener("input", () => {
    checkCountry();
});

// ZIP

const zipInput = document.querySelector("#zip");
const zipMessage = document.querySelector(".message.zip");

function checkZipInline() {
    const country = window.intlTelInputGlobals
        .getCountryData()
        .find((country) => {
            return country.iso2 === countryInput.value;
        });
    zipCheckInline(zipInput, zipMessage, country);
}

function checkZip() {
    const country = window.intlTelInputGlobals
        .getCountryData()
        .find((country) => {
            return country.iso2 === countryInput.value;
        });
    return zipCheck(zipInput, zipMessage, country);
}

zipInput.addEventListener("input", () => {
    checkZipInline();
});

zipInput.addEventListener("blur", () => {
    checkZip();
});

// SUBMIT

const submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", (e) => {
    const validation = {
        Email: checkEmail(),
        Number: checkNumber(),
        Country: checkCountry(),
        Zip: checkZip(),
    };

    if (Object.values(validation).every((check) => check)) {
        console.log("alt ok");
    } else {
        e.preventDefault();
        const failed = [];
        for (let [key, value] of Object.entries(validation)) {
            if (!value) {
                failed.push(key);
            }
        }
        console.log(failed + " feilet validering");
    }
    // DEBUG
    /*     const number = iti.getNumber(); // Or input.value
    const countryCode = iti.getSelectedCountryData().dialCode;
    console.log("Landskode: " + countryCode);
    console.log("Nummer: " + number);
    console.log("Nummer clean: " + number.replace(`+${countryCode}`, ""));

    console.log("error " + iti.getValidationError());
    console.log(window.intlTelInputUtils.validationError); */
});
