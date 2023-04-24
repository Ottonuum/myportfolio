function changeIcon(state) {
    var barH = $("#hamburger-icon .top").height();
    var barM = parseInt($("#hamburger-icon .top").css('marginBottom'));
    midY = barM + barH;
  
    if (state === "ham") {
      $("#hamburger-icon .top").stop().transition({
        rotate: 0
      }, function() {
        $("#hamburger-icon .top").stop().transition({
          y: 0
        });
      });
      $("#hamburger-icon .bottom").stop().transition({
        rotate: 360
      }, function() {
        $("#hamburger-icon .bottom").stop().transition({
          y: 0
        });
        $("#hamburger-icon .middle").css({
          opacity: 1.0
        });
      });
    } else if (state === "noham") {
      $("#hamburger-icon .middle").css({
        rotate: 360
      });
      $("#hamburger-icon .top").stop().transition({
        y: midY
      }, function() {
        $("#hamburger-icon .middle").css({
          opacity: 0
        });
        $("#hamburger-icon .top").stop().transition({
          rotate: 45
        });
      });
      $("#hamburger-icon .bottom").stop().transition({
        y: -midY
      }, function() {
        $("#hamburger-icon .bottom").stop().transition({
          rotate: 315
        });
      });
    }
}
var button = document.getElementById("hamburger-icon")
button.onclick = function() {
    if ($(this).hasClass("noham")) {
      $(this).removeClass().addClass("ham");
      changeIcon("ham");
    } else {
      $(this).removeClass().addClass("noham");
      changeIcon("noham");
    }
};