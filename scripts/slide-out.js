var card = document.getElementById('activator');
var nav = document.getElementsByTagName('nav')[0];
var images = nav.getElementsByTagName('img');
var toggle = false;

card.addEventListener('click',show);

function show() {
    toggle = !toggle;
    if (toggle ? play():reverse()) {}
}

function play() {
    card.style.background = '#805ad5';
    card.style.borderRadius = '100% 0 0 100%';
    nav.style.clipPath = 'ellipse(100% 100% at 50% 50%)';
    for (let index = 0; index < images.length; index++) {
        images[index].style.opacity = '1';
    }
    console.log('play');
}

function reverse() {
    card.removeAttribute('style');
    card.style.borderRadius = '100%';
    nav.style.clipPath = 'ellipse(50% 50% at -50% 50%)';
    for (let index = 0; index < images.length; index++) {
        images[index].style.opacity = '0';
    }
    console.log('reverse');
}