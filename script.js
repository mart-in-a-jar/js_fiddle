/* let message = "Hello";
alert(message);

let user = "John",
    age = 25;

message = "Hello again";
alert(message); */

/* let admin,
    name;

userName = "John",
admin = userName; */

// alert(`Admin: ${admin}`);

// let planet = "Earth";
// let currentVisitor;


//day name
const date = new Date();
let day = date.getDay();
switch (day) {
    case 0:
        day = "Søndag";
        break;
    case 1:
        day = "Mandag";
        break;
    case 2:
        day = "Tirsdag";
        break;
    case 3:
        day = "Onsdag";
        break;
    case 4:
        day = "Torsdag";
        break;
    case 5:
        day = "Fredag";
        break;
    case 6:
        day = "Lørdag";
        break;
}
//month name
const month = date.getMonth() + 1;
let daysInMonth;
switch (month) {
    case 4: //April
    case 6: //June
    case 9: //September
    case 11: //November
        daysInMonth = 30;
        break;
    case 2: //February
        daysInMonth = 28;
        break;
    default:
        daysInMonth = 31;
}

//time
function showTime() {
    const time = new Date();
    let hour = leadingZero(time.getHours());
    let minute = leadingZero(time.getMinutes());
    let second = leadingZero(time.getSeconds());
    document.getElementById("time").innerHTML = `${hour}:${minute}:${second}`;
    setTimeout(showTime, 1000);
}

function leadingZero(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}

document.getElementById("day").innerHTML = `${day} ${leadingZero(date.getDate())}.${leadingZero(date.getMonth() + 1)}.${date.getFullYear()}`;
document.getElementById("daysInMonth").innerHTML = daysInMonth;

showTime();

let userName = prompt("Who dis?");
if (userName) {
    if (userName.length > 12) {
        userName = "på deg";
    }
    document.getElementById("name").innerHTML = ` ${userName}`;
    let fSize = 20 - 1.75 * (userName.length + 1);
    if (fSize < 5) {
        fSize = 5;
    }
    document.getElementById("hei").style.fontSize = `${fSize}vw`;
}