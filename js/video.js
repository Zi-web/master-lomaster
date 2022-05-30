/*
const video1 = "img/VIDEO-2022-05-04-16-27-40.mp4";
const video2 = "img/VIDEO-2022-05-04-16-27-40.mp4";
const video3 = "img/VIDEO-2022-05-04-16-27-40.mp4";
const video4 = "img/VIDEO-2022-05-04-16-27-40.mp4";
*/

/*
let videoArr = [
  "img/VIDEO-2022-05-04-16-27-40.mp4",
  "img/VIDEO-2022-05-04-16-27-40.mp4",
  "img/VIDEO-2022-05-04-16-27-40.mp4",
  "img/VIDEO-2022-05-04-16-27-40.mp4",
];
*/


window.onload = function () {
  const box = document.querySelector(".video__box");
  const link = document.querySelectorAll(".play");
  const video = document.querySelectorAll(".video__video");
  const close = document.querySelectorAll(".video__stop");
  let overlay = document.querySelector(".video");

  for (let i = 0; i < link.length; i++) {
    /*console.log(link[i]);*/
    link[i].addEventListener("click", function (event) {
      event.preventDefault();
      //for (let j = 0; j < video.length; j++) {

      //videoArr.forEach(function (item) {
      console.log(video[i]);
      video[i].src = video[i].getAttribute("src");
      console.log(video[i].getAttribute("src"));
      video[i].style.display = "inline";
      console.log(video[i]);
      //video[j].setAttribute("style", "display: inline");
      close[i].style.display = "inline";
      video[i].classList.add("video__open");
      //});
    });

    close[i].addEventListener("click", function (event) {
      event.preventDefault();
      video[i].style.display = "none";
      close[i].style.display = "none";
      box.classList.remove("video__video");
      overlay.classList.remove("video__open");
      video[i].src = video[i].setAttribute("src", "null");
      /*video[i].src = null;*/
      /*player.muted = true;*/
    });
  }
};
