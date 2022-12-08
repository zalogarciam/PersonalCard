'use strict';

const navMenuIcon = document.getElementById('nav-menu-icon');
const listHeader = document.getElementById('list-header');

// const navMenuIcon = document.querySelector('#nav-menu-icon');
console.log(navMenuIcon);

navMenuIcon.addEventListener('click', () => {
    listHeader.style.opacity = '1'
});