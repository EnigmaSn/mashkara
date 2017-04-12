//MENU BUTTON
$('.hamburger-menu').on('click', function() {
  $('.bar').toggleClass('animate');
  $('.menu').toggleClass('open');
});

// ОТКРЫТИЕ МЕНЮ
var menu_button = document.querySelector(".hamburger-menu");
var menu = document.querySelector(".menu");

// отлавливает событие
menu_button.addEventListener("click", function(event) {
  if (menu.classList.contains(".open")) {
    // отмена действия по умолчанию
    event.preventDefault();
    // вывод в консоль
    console.log("клик таки");
    // без точки, Карл, ибо этот метод работает только с классами
    menu.classList.remove(".open");
  }
  else {
    event.preventDefault();
    menu.classList.add(".open");
  }
});

// ЛИПКАЯ СТРЕЛКА В ХЕДЕРЕ
$(document).ready(function(){
  $("#sticker").sticky({
    topSpacing: 0;
    stopper: '#stopper';
  });
});

// Хедер в мобильнике
$(document).ready(function() {

  var header = $(".page-header"); // Меню
  var scrollPrev = 0; // Предыдущее значение скролла

  $(window).scroll(function() {
    var scrolled = $(window).scrollTop('100px'); // Высота скролла в px
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
