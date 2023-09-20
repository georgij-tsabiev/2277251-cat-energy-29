/* Мобильная навигация */

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

let navNoJs = document.querySelector('.main-nav--no-js');
let mainNavList = document.querySelector('.main-nav__list');

if (navMain.classList.contains('main-nav--no-js')) {
  navMainWrapper.style.display = "block";
  navToggle.style.display = "none";
}

/* Карта */

let screenWidth = window.screen.width;
let center = [59.93861491380169,30.323047228835982];
let pinSize;
let pinOffset;
let zoom = 14;

if (screenWidth < 768) {
  pinSize = [57, 53];
} else {
  pinSize = [113, 106];
};

if (screenWidth >= 768) {
  pinOffset = [-55, -95];
  zoom = 15;
};

if (screenWidth >= 1440) {
  zoom = 16;
}

function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: zoom
  });

  let placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-pin.svg',
    iconImageSize: pinSize,
    iconImageOffset: pinOffset
  });

  map.controls.remove("geolocationControl");
  map.controls.remove("searchControl");
  map.controls.remove("trafficControl");
  map.controls.remove("typeSelector");
  map.controls.remove("fullscreenControl");
  map.controls.remove("zoomControl");
  map.controls.remove("rulerControl");
  map.geoObjects.add(placemark);
}

ymaps.ready(init);
