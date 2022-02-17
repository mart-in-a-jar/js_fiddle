const inputBox = document.querySelector("#input"),
    output = document.querySelector("#output"),
    output2 = document.querySelector("#output2");


//Output last pressed key
inputBox.addEventListener("keydown", action => output.textContent = `"${action.key}".`);

//Output contents of text field
let a;
inputBox.addEventListener("keyup", () => {
    if (input.value) {
        output2.textContent = inputBox.value;
    } else {
        output2.textContent = "";
    }
    a = inputBox.value;
});