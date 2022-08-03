'use strict'

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

// вешаем слушательнажатия на navbarToggler - раскрывает список мобильного меню
navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  // classList – это специальный объект с методами для добавления/удаления одного класса.
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function(){
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}

// скрипт на поиск открытие закрытие
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for(let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}

// header появление меню при скролле
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (this.window.scrollY >= 200) {
    header.classList.add("active");
  }else{
    header.classList.remove("active");
  }
});
