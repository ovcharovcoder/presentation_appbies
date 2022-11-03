$(function () {
  // ------ Кнопка бургер-меню для адаптива ------------
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });

  // ------ Плавный переход к разделам сайта с меню -----------
  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;

    $("body, html").animate({ scrollTop: top }, 1500);
  });

  // ------------- Слайдер ----------------------
  $(".screenshots__slider").slick({
    // Стрелка для перехода на предыдущий слайд
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="images/icons/arrow-prev.png" alt="Previous"></button>',
    // Стрелка для перехода на следующий слайд
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="images/icons/arrow-next.png" alt="Next"></button>',
    arrows: true, // Отключаем стрелки
    dots: false, // Включаем точки под слайдером
    autoplay: false, // Автовоспроизведение слайдера
    slidesToShow: 3, // Показывать по 4 слайда в одном окне
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 1,
          fade: true,
        },
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  });
});
