const mask = document.getElementById("myMask");

for (let i = 0; i < 8; i++) {
    let strip = `<rect class="rectangle" x="${
    i * 8
  }" y="0" width="5%" height="100%" fill="black" />`;

    mask.innerHTML += strip;
}

const tl = gsap.timeline({
    repeat: -1,
    repeatRefresh: true
});

tl.to("h1", {
        duration: 1,
        autoAlpha: 1
    })
    .to(
        ".rectangle", {
            xPercent: 160,
            ease: "none",
            duration: 1,
            fill: "white"
        },
        "-=1"
    )
    .to(
        ".rectangle", {
            xPercent: 760,
            ease: "none",
            duration: 3,
            fill: "white"
        }
    )
    .to(
        ".rectangle", {
            xPercent: 200,
            ease: "none",
            duration: 3,
            fill: "white"
        }
    )
    .to(
        ".rectangle", {
            xPercent: 0,
            ease: "none",
            duration: 1,
            fill: "black"
        }
    )
    .to(
        "h1", {
            ease: "none",
            duration: 1,
            autoAlpha: 0
        },
        "-=1"
    );

const placesOne = ["PORSCHE", "PORSCHE", "PORSCHE"];
const placesTwo = ["911", "718", "PANAMERA"];
const photos = [
    "./images/porsche-911.webp",
    "./images/porsche-718.webp",
    "./images/porsche-panamera.webp",
];
let count = 1;

setInterval(function () {
    document.querySelector(".title1").innerHTML = placesOne[count];
    document.querySelector(".title2").innerHTML = placesTwo[count];
    document.querySelector(".image").setAttribute("href", `${photos[count]}`);

    count >= placesOne.length - 1 ? (count = 0) : count++;

}, 8000);