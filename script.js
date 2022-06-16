// Buttons Onclicks
document.getElementById("about-app").onclick = function () { page("about") };
document.getElementById("projects-app").onclick = function () { page("projects") };

document.getElementById("radiohead-link").onclick = function () { tab('radiohead') };
document.getElementById("chliq-link").onclick = function () { tab('chliq') };
document.getElementById("icons-link").onclick = function () { tab('icons') };
document.getElementById("sweet-berries-link").onclick = function () { tab('sweet-berries') };


// Switching windows
function page(selected) {
  var page = document.getElementsByTagName('section');
  for (var i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }
  var app = document.getElementsByClassName("app");
  for (var i = 0; i < app.length; i++) {
    app[i].className = app[i].className.replace(" checked", "");
  }
  document.getElementById(selected).style.display = "flex";
  document.getElementById(selected + "-app").className += " checked";
}

// Switching tabs in projects
function tab(selected) {
  var content = document.getElementsByClassName("content");
  for (var i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  var link = document.getElementsByClassName("link");
  for (var i = 0; i < link.length; i++) {
    link[i].className = link[i].className.replace(" checked", "");
  }
  document.getElementById(selected).style.display = "block";
  document.getElementById(selected + "-link").className += " checked";
}