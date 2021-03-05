const left = document.getElementsByClassName('left');
const right = document.getElementsByClassName('right');
const obj = document.getElementsByClassName('obj');

function leftMove(){
    TweenMax.to(".obj",1,{marginLeft:50});
    for (let index = 0; index < obj.length; index++) {
        obj[index].style.left = '50px'
    }
}

function rightMove(){
    TweenMax.to(".obj",1,{marginLeft:-50});
    for (let index = 0; index < obj.length; index++) {
        obj[index].style.left = '0px'
    }
}

left[0].addEventListener('click',leftMove);
right[0].addEventListener('click',rightMove);
