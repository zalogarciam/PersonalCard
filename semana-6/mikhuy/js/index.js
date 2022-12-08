'use strict';

const navMenuIcon = document.getElementById('nav-menu-icon');
const listHeader = document.getElementById('list-header');
const navCloseIcon = document.getElementById('icon-close');

// const navMenuIcon = document.querySelector('#nav-menu-icon');
console.log(navCloseIcon);
console.log(navMenuIcon);


navCloseIcon.addEventListener('click', () => {
    listHeader.style.pointerEvents ='none';
    listHeader.style.opacity = 0
});

navMenuIcon.addEventListener('click', () => {
    listHeader.style.pointerEvents ='auto';
    listHeader.style.opacity = 1
});

