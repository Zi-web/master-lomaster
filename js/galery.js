// Тип Image - галерея картинок
/*$(".popup-gallery").magnificPopup({
  delegate: "a",
  type: "image",
  tLoading: "Загрузка изображения #%curr%...",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
});

$(".popup-gallery1").magnificPopup({
  delegate: "a",
  type: "image",
  tLoading: "Загрузка изображения #%curr%...",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
});

$(".popup-gallery2").magnificPopup({
  delegate: "a",
  type: "image",
  tLoading: "Загрузка изображения #%curr%...",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
});

$(".popup-gallery3").magnificPopup({
  delegate: "a",
  type: "image",
  tLoading: "Загрузка изображения #%curr%...",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
});

$(".popup-gallery4").magnificPopup({
  delegate: "a",
  type: "image",
  tLoading: "Загрузка изображения #%curr%...",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
});*/

var groups = {};
$(".galleryItem").each(function () {
  var id = parseInt($(this).attr("data-group"), 10);

  if (!groups[id]) {
    groups[id] = [];
  }

  groups[id].push(this);
});

$.each(groups, function () {
  $(this).magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    gallery: { enabled: true },
  });
});
