/*let playButton = document.getElementById("play_button");
playButton.addEventListener("click", function () {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.innerHTML = "Pause";
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.innerHTML = "Play";
  }
});
*/

var box = document.querySelector(".video__box");
var link = document.querySelector(".play");
var video = document.querySelector(".video__video");
var close = box.querySelector(".video__stop");
var overlay = document.querySelector(".video");
/*let player = video.querySelector("video__video");*/

link.addEventListener("click", function (event) {
  event.preventDefault();
  video.src = "img/VIDEO-2022-05-04-16-27-40.mp4";
  video.style.display = "inline";
  close.style.display = "inline";
  overlay.classList.add("video__open");
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  video.style.display = "none";
  close.style.display = "none";
  box.classList.remove("video__video");
  overlay.classList.remove("video__open");
  video.src = "";
  /*video.src = "img/VIDEO-2022-05-04-16-27-40.mp4";*/
  /*player.muted = true;*/
});
