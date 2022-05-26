window.addEventListener("resize" || "load", function (event) {
  // do stuff here
  let box = document.getElementsByClassName("services__item");
  let btn = document.getElementById("button-show");
  if (document.documentElement.clientWidth < 469) {
    for (let i = 3; i < box.length; i++) {
      box[i].style.display = "none";
    }

    let countD = 3;
    btn.addEventListener("click", function () {
      let box = document.getElementsByClassName("services__item");
      countD += 3;
      if (countD <= box.length) {
        for (let i = 0; i < countD; i++) {
          box[i].style.display = "flex";
        }
      }
    });
  } else if (document.documentElement.clientWidth > 469) {
    /*countD = box.length;*/
    /*console.log("больше 469px");*/
    for (let i = 3; i < box.length; i++) {
      box[i].style.display = "flex";
    }
  }
});
