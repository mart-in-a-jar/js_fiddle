let userName = prompt("Who's there?"),
    userPassword = "TheMaster"

if (userName != null && userName.toLowerCase() === "admin") {
    let typedPassword = prompt("Password");
    if (typedPassword === userPassword) {
        alert("Welcome!");
    } else if (typedPassword === null || typedPassword === "") {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (userName === null || userName === "") {
    alert("Canceled");
} else {
    alert("I don't know you");
}