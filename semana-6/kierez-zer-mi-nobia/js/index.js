'use strict';

const documentReady = () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
  
    const brokenHeart = () => {
      noButton.style.top = Math.random() * innerHeight + 'px';
      noButton.style.left = Math.random() * innerWidth + 'px';
    };

    const loveHeart = () => { 
        alert('❤️ NoW ZoMoZ PartNer ❤️');
        alert('♥ U Me DaZ LuZ & EsPerrAnZa A My Laif ♥');
        // alert('😱 OuR VoDa Is MaNaNa 😱');
        location.href = 'https://www.youtube.com/watch?v=LV89uSSQUL0';
    }
  
    noButton.addEventListener('mouseover', brokenHeart);
    yesButton.addEventListener('click', loveHeart);
};

document.addEventListener('DOMContentLoaded' ,documentReady);