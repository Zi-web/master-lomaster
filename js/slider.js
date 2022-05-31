$(".works__wrapper").each(function () {
  $(".slider-win").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,
    focusOnSelect: true,
    fade: true,
    cssEase: "linear",
    asNavFor: false,
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
});

/*-----слайдер в слайдере--fancybox-----------*/

/*---------------------видео fancybox-------------------------*/
$(document).ready(function () {
  Fancybox.bind("[data-fancybox-plyr]", {
    on: {
      reveal: (fancybox, slide) => {
        if (typeof Plyr === undefined) {
          return;
        }

        let $el;

        if (slide.type === "html5video") {
          $el = slide.$content.querySelector("video");
        } else if (slide.type === "video") {
          $el = document.createElement("div");
          $el.classList.add("plyr__video-embed");

          $el.appendChild(slide.$iframe);

          slide.$content.appendChild($el);
        }
        /*
        if ($el) {
          slide.player = new Plyr($el);
        }*/
      },
      "Carousel.unselectSlide": (fancybox, carousel, slide) => {
        if (slide.player) {
          slide.player.pause();
        }
      },
      "Carousel.selectSlide": (fancybox, carousel, slide) => {
        if (slide.player) {
          slide.player.play();
        }
      },
    },
  });
});
