const tabNavs = document.querySelectorAll(".nav-tab");
const tabPanes = document.querySelectorAll(".tab-pane");

for (let i = 0; i < tabNavs.length; i++) {
  tabNavs[i].addEventListener("click", function (e) {
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");

    for (let j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active");
        /*if ($(window).width() < 640) {
         
          $(".tab-pane.active:not(.slick-initialized)").slick();
        
        }*/
        /*
        $(".tab-pane:not(.active)").hide(".slick-initialized");
        $(".tab-pane.active").show(".slick-initialized");*/
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
        /*
        $(".tab-pane:not(.active)").hide(".slick-initialized");
        $(".tab-pane.active").show(".slick-initialized");
*/
      }
    }
  });
}
