// https://dev.to/b4two/how-to-make-a-custom-cursor-with-css-and-jquery-5g3m
$(document).ready(function () {
  var cursor = $("#cursor");

  $(window).mousemove(function (e) {
    cursor.css({
      top: e.clientY - cursor.height() / 2,
      left: e.clientX - cursor.width() / 2
    });
  });

  $("a")
    .mouseenter(function () {
      cursor.css({
        transform: "scale(1)",
        opacity: "0.1"
      });
    })
    .mouseleave(function () {
      cursor.css({
        transform: "scale(0.5)",
        opacity: "0"
      });
    });

    $("input[type=submit]")
    .mouseenter(function () {
      cursor.css({
        transform: "scale(1)",
        opacity: "0.1"
      });
    })
    .mouseleave(function () {
      cursor.css({
        transform: "scale(0.5)",
        opacity: "0"
      });
    });

  $(window && "a")
    .mousedown(function () {
      cursor.css({
        transform: "scale(0.75)",
        opacity: "0.25",
      });
    })
    .mouseup(function () {
      cursor.css({
        transform: "scale(1)",
        opacity: "0"
      });
    });

    $(window && "input[type=submit]")
    .mousedown(function () {
      cursor.css({
        transform: "scale(0.75)",
        opacity: "0.25",
      });
    })
    .mouseup(function () {
      cursor.css({
        transform: "scale(1)",
        opacity: "0"
      });
    });
});
