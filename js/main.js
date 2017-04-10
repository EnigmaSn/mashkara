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

