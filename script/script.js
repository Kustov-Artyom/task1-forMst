'use strict'
const header = document.querySelector('.header');
const firstBlock = document.getElementById('home');
const firstBlockHeight = firstBlock.clientHeight - 500;
const imagePosition = document.querySelector('.home_wrapper_img')

let scrollStarted = 0;

window.addEventListener('scroll', headerScrollHandler);

function headerScrollHandler () {
    const scrollTop = window.scrollY;

    if (scrollTop >= firstBlockHeight) {
        header.classList.add('header--fixed')
        header.classList.remove('header')
        imagePosition.classList.remove('home_wrapper_img')
        imagePosition.classList.add('home_wrapper_img--fixed')
    } else {
        header.classList.remove('header--fixed')
        header.classList.add('header')
        imagePosition.classList.add('home_wrapper_img')
        imagePosition.classList.remove('home_wrapper_img--fixed')
    }

    scrollStarted = scrollTop;
};