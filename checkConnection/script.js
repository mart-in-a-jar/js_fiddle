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
