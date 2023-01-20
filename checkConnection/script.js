async function checkConnection() {
    // this will be true if a network connection is active (even vpn adapters etc.)
    // does not equal internet connection
    if (window.navigator.online) return "Offline by navigator.online";

    try {
        const response = await fetch("https://www.google.com", {
            method: "HEAD",
            mode: "no-cors",
        });
        console.log(response);
        return "Online";
    } catch {
        return "Offline by fetch";
    }
}

function testConnection() {
    return checkConnection().then((data) => {
        document.querySelector(".status").textContent = data;
    });
}

window.addEventListener("online", () => console.log("Online"));
window.addEventListener("offline", () => console.log("Offline"));

document.querySelector("button").addEventListener("click", testConnection);

/* 
    optimally, check connectio to own server:

    const url = new URL(window.location.origin)

  // random value to prevent cached responses
  url.searchParams.set('rand', getRandomString())
  fetch(url.toString(), {method: "HEAD"})
 */

function autoCheck() {
    document.querySelector(
        ".status"
    ).innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_ajPY{transform-origin:center;animation:spinner_AtaB .75s infinite linear}@keyframes spinner_AtaB{100%{transform:rotate(360deg)}}</style><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" class="spinner_ajPY"/></svg>`;
    testConnection();
}

const slider = document.querySelector("input[type='checkbox']");
slider.addEventListener("change", toggleAuto);
window.addEventListener("DOMContentLoaded", toggleAuto);


let timer;
function toggleAuto() {
    if (slider.checked) timer = setInterval(autoCheck, 3000);
    else clearInterval(timer);
}