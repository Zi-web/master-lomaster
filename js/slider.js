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
// Initialise Carousel
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  Dots: false,
  Navigation: false,
});

// Thumbnails
const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
  Sync: {
    target: mainCarousel,
    friction: 0,
  },
  Dots: false,
  Navigation: false,
  center: true,
  slidesPerPage: 1,
  infinite: false,
});

/*
// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  Carousel: {
    on: {
      change: (that) => {
        mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
          friction: 0,
        });
      },
    },
  },
});*/

// Initialise Carousel
const mainCarousel2 = new Carousel(document.querySelector("#mainCarousel2"), {
  Dots: false,
  Navigation: false,
});

// Thumbnails

const thumbCarousel2 = new Carousel(document.querySelector("#thumbCarousel2"), {
  Sync: {
    target: mainCarousel2,
    friction: 0,
  },
  Dots: false,
  Navigation: false,
  center: true,
  slidesPerPage: 1,
  infinite: false,
});

/*
// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  Carousel: {
    on: {
      change: (that) => {
        mainCarousel2.slideTo(mainCarousel2.findPageForSlide(that.page), {
          friction: 0,
        });
      },
    },
  },
});
*/

// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  Carousel: {
    on: {
      change: (that) => {
        mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
          friction: 0,
        });
      },
    },
  },
});

// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery2"]', {
  Carousel: {
    on: {
      change: (that) => {
        mainCarousel2.slideTo(mainCarousel2.findPageForSlide(that.page), {
          friction: 0,
        });
      },
    },
  },
});

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

/*

$(".slider__item--wrapper").each(function (index) {
  $(".slider-for", $(this)).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: $(this).find(".slider-nav"),
  });
  $(".slider-nav", $(this)).slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: $(this).find(".slider-for"),
  });
});
*/
