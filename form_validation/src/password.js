import { styleError } from "./styling";

function passCheckInline(pass, message) {
    if (pass.validity.patternMismatch) {
        console.log("je");
        styleError(pass, message);
        message.textContent = "Ji";
    }
    displayEyeIcon(pass);
}

function passConfirmCheckInline(pass, confirm, message) {
    displayEyeIcon(confirm);
}

function displayEyeIcon(input) {
    const eyeWrapper = input.nextElementSibling;
    if (input.value) {
        if (!eyeWrapper.classList.contains("active")) {
            eyeWrapper.classList.add("active");
        }
    } else {
        if (eyeWrapper.classList.contains("active")) {
            eyeWrapper.classList.remove("active");
            if (input.type === "text") {
                const eye = eyeWrapper.querySelector(".fa-eye");
                const eyeClosed = eyeWrapper.querySelector(".fa-eye-slash");
                input.type = "password";
                eye.classList.add("active");
                eyeClosed.classList.remove("active");
            }
        }
    }
}

document.querySelector(".pass .icon").addEventListener("click", showPassword);

function showPassword() {
    const input = this.previousElementSibling;
    const iconOpen = this.querySelector(".fa-eye");
    const iconClosed = this.querySelector(".fa-eye-slash");

    input.type = input.type === "password" ? "text" : "password";
    iconOpen.classList.toggle("active");
    iconClosed.classList.toggle("active");
    input.focus();
}

// Only show when holding
document
    .querySelector(".pass-confirm .icon")
    .addEventListener("mousedown", holdToShowPassword);

function holdToShowPassword(e) {
    const input = this.previousElementSibling;
    const iconOpen = this.querySelector(".fa-eye");
    const iconClosed = this.querySelector(".fa-eye-slash");
    if (e.buttons === 1) {
        input.type = "text";
        iconOpen.classList.remove("active");
        iconClosed.classList.add("active");

        document
            .querySelector(".pass-confirm .icon")
            .addEventListener("mouseup", hidePassword);

        document.addEventListener("mousemove", hidePasswordOnDrag);
    }

    function hidePassword() {
        const iconOpen = this.querySelector(".fa-eye");
        const iconClosed = this.querySelector(".fa-eye-slash");
        iconOpen.classList.add("active");
        iconClosed.classList.remove("active");
        input.type = "password";
        document.removeEventListener("mousemove", hidePasswordOnDrag);
        input.focus();
    }

    function hidePasswordOnDrag(e) {
        const iconOpen = input.nextElementSibling.querySelector(".fa-eye");
        const iconClosed =
            input.nextElementSibling.querySelector(".fa-eye-slash");
        if (e.target.nodeName != "svg" && e.target.nodeName != "path") {
            iconOpen.classList.add("active");
            iconClosed.classList.remove("active");
            input.type = "password";
            document.removeEventListener("mousemove", hidePasswordOnDrag);
            input.focus();
        }
    }
}

export { passCheckInline, passConfirmCheckInline };
