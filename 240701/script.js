$(window).on("scroll mousemove", function (e) {
  // 마우스 좌표값
  $(".cursor").css("left", e.pageX + "px");
  $(".cursor").css("top", e.pageY + "px");
});
$("a").hover(function () {
  $(".cursor").toggleClass("on");
});
