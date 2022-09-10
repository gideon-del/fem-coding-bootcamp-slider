"use strict";
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
//
const images = document.querySelectorAll(".image__main");
const text = document.querySelectorAll(".test");

let counter = 0;
const maxSlide = text.length - 1;
const gotoSlide = (slid) => {
  images.forEach((img, i) => {
    img.style.transform = `translateX(${100 * (i - slid)}%)`;
  });
  text.forEach((t, i) => {
    t.style.transform = `translateX(${100 * (i - slid)}%)`;
  });
};
const nextSlide = () => {
  if (counter == maxSlide) counter = 0;
  else counter++;
  gotoSlide(counter);
};
const prevSlide = () => {
  if (counter <= 0) counter = maxSlide;
  else counter--;
  gotoSlide(counter);
};
const init = () => {
  gotoSlide(0);
};
init();
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);
