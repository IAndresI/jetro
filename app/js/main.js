"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Slider
  var slider_transformX = document.querySelector(".slider__transformX"),
    slider_item = document.querySelectorAll(".slider__item"),
    slider_mini_item = document.querySelectorAll(".items__slide"),
    slider_previous = document.querySelector(".slider__button--previous"),
    slider_next = document.querySelector(".slider__button--next"),
    number = 0;

  slider_transformX.style.width = slider_item.length * 100 + "%";

  for (let i = 0; i < slider_item.length; i++) {
    slider_mini_item[i].setAttribute("data-slider", i);
  }

  function showSlide() {
    slider_transformX.style.transform = `translateX(-${
      (100 / slider_item.length) * number
    }%)`;
  }
  showSlide();

  slider_mini_item.forEach(function (element) {
    element.addEventListener("click", function (e) {
      number = e.target.getAttribute("data-slider");
      showSlide();
    });
  });

  slider_next.addEventListener("click", function () {
    if (number >= slider_mini_item.length - 1) {
      number = 0;
    } else number++;
    showSlide();
  });

  slider_previous.addEventListener("click", function () {
    if (number <= 0) {
      number = slider_mini_item.length - 1;
    } else number--;
    showSlide();
  });

  // Menu

  document
    .querySelector(".header__menu-mini")
    .addEventListener("click", function () {
      document.querySelector(".header__nav").classList.toggle("show");
    });
  console.log("xcxcvxcvxcv");
});
