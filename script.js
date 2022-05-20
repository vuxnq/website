function page(check, selected) {
  var page = document.getElementsByTagName('main');
  for (var i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }
  var app = document.getElementsByClassName("app");
  for (var i = 0; i < app.length; i++) {
    app[i].className = app[i].className.replace(" checked", "");
  }
  document.getElementById(selected).style.display = "flex";
  check.currentTarget.className += " checked"
}

function tab(check, selected) {
  var content = document.getElementsByClassName("content");
  for (var i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  var link = document.getElementsByClassName("link");
  for (var i = 0; i < link.length; i++) {
    link[i].className = link[i].className.replace(" checked", "");
  }
  document.getElementById(selected).style.display = "block";
  check.currentTarget.className += " checked"
}