// ГАМБУРГЕР ДЕСКТОП ЦВЕТ

var bar = $(".bar");

// window.onload = function() {
//   setInterval(function() {
//     window.scrollTo(0, 623);
//     bar.css('background', '#000');
//     // barAfter.css('background', '#000');
//     // barBefore.css('background', '#000');
//   }, 500);
//   setInterval(function() {
//     window.scrollTo(0, 0);
//     bar.css('background', '#fff');
//   }, 2000);
// };


// Хедер в мобильнике
$(document).ready(function() {

  var header = $(".page-header__top"); // Меню
  var scrollPrev = 0 // Предыдущее значение скролла

  $(window).scroll(function() {
    var scrolled = $(window).scrollTop(); // Высота скролла в px
    var firstScrollUp = false; // Параметр начала сколла вверх
    var firstScrollDown = false; // Параметр начала сколла вниз

    // Если скроллим
    if ( scrolled > 0 ) {
      // Если текущее значение скролла > предыдущего, т.е. скроллим вниз
      if ( scrolled > scrollPrev ) {
        firstScrollUp = false; // Обнуляем параметр начала скролла вверх
        // Если меню видно
        if ( scrolled < header.height() + header.offset().top ) {
          // Если только начали скроллить вниз
          if ( firstScrollDown === false ) {
            var topPosition = header.offset().top; // Фиксируем текущую позицию меню
            header.css({
              "top": topPosition + "px"
            });
            firstScrollDown = true;
          }
          // Позиционируем меню абсолютно
          header.css({
            "position": "absolute"
          });
          // Если меню НЕ видно
        } else {
          // Позиционируем меню фиксированно вне экрана
          header.css({
            "position": "fixed",
            "top": "-" + header.height() + "px"
          });
        }

        // Если текущее значение скролла < предыдущего, т.е. скроллим вверх
      } else {
        firstScrollDown = false; // Обнуляем параметр начала скролла вниз
        // Если меню не видно
        if ( scrolled > header.offset().top ) {
          // Если только начали скроллить вверх
          if ( firstScrollUp === false ) {
            var topPosition = header.offset().top; // Фиксируем текущую позицию меню
            header.css({
              "top": topPosition + "px"
            });
            firstScrollUp = true;
          }
          // Позиционируем меню абсолютно
          header.css({
            "position": "absolute"
          });
        } else {
          // Убираем все стили
          header.removeAttr("style");
        }
      }
      // Присваеваем текущее значение скролла предыдущему
      scrollPrev = scrolled;
    }
  });
});

//MENU BUTTON
$('.hamburger-menu').on('click', function() {
  $('.bar').toggleClass('animate');
  $('.menu').toggleClass('open');
});

// ОТКРЫТИЕ МЕНЮ MOBILE
// починить
var mob_menu_button = document.querySelector(".h_hamburger-mob");
var top_menu = document.querySelector('.page-header__top-wrapper');
var mob_menu = document.querySelector(".page-header__mob-open");

mob_menu_button.addEventListener("click", function(event) {
  if (mob_menu.classList.contains(".open-mob")) {
    event.preventDefault();
    console.log("клик таки");
    top_menu.css('background', '#000');
    mob_menu.classList.remove(".open-mob");
  }
  else {
    event.preventDefault();
    top_menu.css('background', '#efefef');
    mob_menu.classList.add(".open-mob");
  }
});

// ОТКРЫТИЕ МЕНЮ ДЕСКТОП
var menu_button = document.querySelector(".hamburger-menu");
var menu = document.querySelector(".menu");

menu_button.addEventListener("click", function(event) {
  if (menu.classList.contains(".open")) {
    event.preventDefault();
    console.log("клик таки");
    menu.classList.remove(".open");
  }
  else {
    event.preventDefault();
    menu.classList.add(".open");
  }
});

// ЛИПКАЯ СТРЕЛКА В ХЕДЕРЕ
// $(document).ready(function(){
//   $("#sticker").sticky({
//     topSpacing: 0;
//     stopper: '#stopper';
//   });
// });
