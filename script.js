// Header
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= window.innerHeight / 2 - 70) {
    $("header").addClass("scroll");
  } else {
    $("header").removeClass("scroll");
  }
});

// Kanye Quotes
fetch('https://api.kanye.rest/')
.then(res => res.json())
.then(data => {
  document.getElementById('quote').innerHTML = '&quot' + data.quote + '&quot';
})