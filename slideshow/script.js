const images = [
    {
        url: "https://res.cloudinary.com/studentsamskipnaden-i-s-r-st-norge/image/upload/v1661165648/Testmappe/attachment-The-Devil-Wears-Prada-Color-Decay-Album-Art_fqhbrz.jpg",
        title: "tdwp",
    },
    {
        url: "https://res.cloudinary.com/studentsamskipnaden-i-s-r-st-norge/image/upload/v1662019433/118560981_1770520109782565_5358171113188417117_n_pbihe4_jmaonx.jpg",
        title: "Board game night",
    },
    {
        url: "https://res.cloudinary.com/studentsamskipnaden-i-s-r-st-norge/image/upload/v1661165648/Testmappe/attachment-The-Devil-Wears-Prada-Color-Decay-Album-Art_fqhbrz.jpg",
        title: "tdwp 2",
    },
    {
        url: "https://res.cloudinary.com/studentsamskipnaden-i-s-r-st-norge/image/upload/v1662019433/118560981_1770520109782565_5358171113188417117_n_pbihe4_jmaonx.jpg",
        title: "Board game night",
    },
];

const slideshow = document.querySelector(".slideshow");
const dotContainer = document.querySelector(".dots");
const nextSlide = document.querySelector(".next");
const prevSlide = document.querySelector(".prev");
const playButton = document.querySelector(".play");

let slide = 1;
let timer;
let autoSlide = false;

insertImages();
const dots = document.querySelectorAll(".dot");
showSlide(slide);

function insertImages() {
    images.forEach((image) => {
        const img = document.createElement("img");
        img.src = image.url;
        img.alt = image.title;
        slideshow.appendChild(img);

        const dot = document.createElement("div");
        dot.classList.add("dot");
        dotContainer.appendChild(dot);
    });
}

function showSlide(num) {
    const slides = document.querySelectorAll(".slideshow img");

    if (num > slides.length) {
        slide = 1;
    }
    if (num < 1) {
        slide = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }

    slides[slide - 1].classList.add("active");
    dots[slide - 1].classList.add("active");

    // reset timer
    clearInterval(timer);
    if (autoSlide) {
        timer = setInterval(() => showSlide(++slide), 3000);
    }
}

nextSlide.addEventListener("click", () => showSlide(++slide));
prevSlide.addEventListener("click", () => showSlide(--slide));

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
        showSlide((slide = i + 1));
    });
}

playButton.addEventListener("click", () => {
    if (autoSlide) {
        autoSlide = false;
        playButton.innerHTML = "&#x23F5;";
        showSlide(slide);
    } else {
        autoSlide = true;
        playButton.innerHTML = "&#x23F8;";
        showSlide(slide);
    }
});
