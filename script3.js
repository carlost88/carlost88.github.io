imgHolder = document.querySelector('.babyBull');
coordinates = document.querySelector('h2');
title = document.querySelector('h1');
disco = document.querySelector('.disco');
landing = document.querySelector('.landing');
topRightMoo = document.querySelector('.top-right-moo');
player = document.getElementById('player');



const bull = document.querySelector('#bull');
const bull2 = document.createElement('img'); 
bull2.src ="img/bull2.png";

const moo = document.createElement('p');
moo.appendChild(document.createTextNode('Moo!'));
topRightMoo.appendChild(moo);
topRightMoo.style.display = 'none';

let displayedImage = false;

const disappear = (e) => {
    displayedImage = !displayedImage;

    if (displayedImage){
        imgHolder.replaceChild(bull2, bull);
        topRightMoo.style.display = 'block';
    } else {
        imgHolder.replaceChild(bull, bull2);
        topRightMoo.style.display = 'none';
    }
}



// let dancing = false;
// let startDance = setInterval(disappear, 500);

// const danceInterval = (e) => {
//     dancing = !dancing;
//     topRightMoo.style.display = 'block';
//     if (dancing){
//         startDance();
//     } else {
//         clearInterval(startDance);
//         topRightMoo.style.display = 'none';
//     }
// }

// let danceInterval = () => { doesn't stop is the problem
//     setInterval(disappear, 500);
// }


// const getCoords = (e) => {
// 	coordinates.textContent = `X: ${e.offsetX} Y: ${e.offsetY}`;
// }

const colorChange = (e) => {
	title.style.color = `rgb(${e.offsetX}, 45, ${e.offsetY})`;
	landing.style.color = `rgb(${e.offsetY}, ${e.offsetX}, 45)`;
}

const colorChangeBlack = (e) => {
	title.style.color = 'black';
	landing.style.color = 'black';
}

disco.addEventListener('mousemove', colorChange);
disco.addEventListener('mouseleave', colorChangeBlack);
player.addEventListener('play', disappear);
player.addEventListener('pause', disappear);

// document.querySelector('body').addEventListener('mousemove', getCoords);