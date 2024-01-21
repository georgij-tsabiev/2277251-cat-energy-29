let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let navMainWrapper = document.querySelector('.main-nav__wrapper');


navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navMainWrapper.style.display = "block";
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navMainWrapper.style.display = "none";
  }
});

let navNoJs = document.querySelector('.main-nav--nojs');
let mainNavList = document.querySelector('.main-nav__list');

if (navMain.classList.contains('main-nav--nojs')) {
  navMainWrapper.style.display = "block";
  navToggle.style.display = "none";
  mainNavList.style.flexDirection = "row";
  mainNavList.style.border = "none";
  mainNavList.style.gap = "5px 25px";
  mainNavList.style.flexWrap = "wrap";
  mainNavList.style.paddingTop = "5px";
}
