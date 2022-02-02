$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= window.innerHeight / 2 - 70) {
    $("header").addClass("scroll");
  } else {
    $("header").removeClass("scroll");
  }
});
