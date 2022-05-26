$(".slider-win").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".slider-controll",
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

  /*autoplay: true,
  autoplaySpeed: 4500,
  infinite: true,
  pauseOnFocus: false,
  pauseOnHover: false,*/
});

/*---------------*/
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

/*$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  asNavFor: ".slider-nav",
});

$(".slider-nav").slick({
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  focusOnSelect: true,
});
*/
