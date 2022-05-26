//const buttonsParent = document.querySelector('.level__buttons');

const faqItems = document.querySelectorAll(".faq-item");
for (let e = 0; e < faqItems.length; e++) {
  let t = faqItems[e];
  t.addEventListener("click", function (e) {
    let i = t.querySelector(".faq-item__content"),
      o = t.querySelector(".faq-item__btn");
    faqClose(t),
      i.classList.toggle("faq-item__content--active"),
      o.classList.toggle("faq-item__btn--active");
  });
}
function faqClose(e) {
  for (let t = 0; t < faqItems.length; t++) {
    let i = faqItems[t];
    i !== e &&
      (i
        .querySelector(".faq-item__content")
        .classList.remove("faq-item__content--active"),
      i
        .querySelector(".faq-item__btn")
        .classList.remove("faq-item__btn--active"));
  }
}
