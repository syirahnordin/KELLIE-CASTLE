const slides = document.querySelectorAll('.slides li');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');

let currentSlide = 0;

function moveSlide(dir) {
    currentSlide += dir;
    if (currentSlide < 0) currentSlide = 1-5
