$(".slider-win").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  infinite: true,
  focusOnSelect: true,
  fade: true,
  cssEase: "linear",
  prevArrow: "<img src='img/prev.svg' class='slick-prev' alt='prev'>",
  nextArrow: "<img src='img/next.svg' class='slick-next' alt='next'>",
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        arrows: false,
      },
    },
  ],
});
/*
$(".slider-controll").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  vertical: false,
  dots: false,
  infinite: true,
  asNavFor: ".slider-win",
  focusOnSelect: true,
  centerMode: false,
  variableWidth: false,
});
*/

/*-----слайдер в слайдере-------------*/
const $buttons = $(".item-slick").click(function () {
  $slick.slick("slickGoTo", $buttons.index(this));
});

const $slick = $(".slider-for")
  .on("init beforeChange", function (e, slick, currSlide, nextSlide) {
    $buttons
      .removeClass("active")
      .eq(e.type === "init" ? slick.currentSlide : nextSlide)
      .addClass("active");
  })
  .slick({
    infinite: false,
    arrows: false,
    slidesToShow: 1,
  });
/*
$("#slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: false,
  adaptiveHeight: true,
  asNavFor: "#slider-nav",
});

$("#slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: "#slider-for",
  arrows: false,
  dots: true,
  centerMode: false,
  focusOnSelect: true,
  variableWidth: true,
});


*/

/*
$(".slider__item--wrapper").each(function () {
  $(this)
    .find(".slider-for")
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: false,
      adaptiveHeight: true,
      asNavFor: $(this).find(".slider-nav"),
    });

  $(this)
    .find(".slider-nav")
    .slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: $(this).find(".slider-for"),
      arrows: false,
      dots: true,
      centerMode: false,
      focusOnSelect: true,
      variableWidth: true,
    });
});
*/
/*---------------*/

/* слайдер в примеры работ
$(window).on("load resize", function () {
  if ($(window).width() < 640) {
    $(".tab-pane.active:not(.slick-initialized)").slick({
      centerMode: true,
      dots: true,
      arrows: false,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      dotsClass: "slick-dots slider__dots",
    });
  } else {
    $(".tab-pane.active.slick-initialized").slick("unslick");
  }
});

*/
