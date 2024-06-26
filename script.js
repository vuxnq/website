// loading screen
window.addEventListener("load", function () {
  document.getElementsByTagName("nav")[0].style.display = "none";
  document.getElementById("background").style.display = "initial";
  document.getElementById("loading-screen").style.animation = "loading-screen-disappear 0.5s linear 0.2s forwards";
  this.setInterval(function () {
    document.getElementsByTagName("nav")[0].style.display = "initial";
  }, 350)
  setInterval(function () {
    document.getElementById("loading-screen").style.display = "none";
  }, 700)
})

// switching windows
function page(selected) {
  var page = document.getElementsByTagName('section');
  for (var i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }
  var app = document.getElementsByClassName("app");
  for (var i = 0; i < app.length; i++) {
    app[i].className = app[i].className.replace(" checked", "");
  }
  document.getElementById(selected).style.display = "block";
  document.getElementById(selected + "-app").className += " checked";
}

// switching tabs in projects
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

// start on load
window.onload = lastfm_nowplaying();

// automatic refresh of lastfm
setInterval(function () {
  lastfm_nowplaying();
}, 5000);

// lastfm api
function lastfm_nowplaying() {
  fetch('https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=vuxnq&api_key=70da5f72ca8ddc45015f96f2a0369819&limit=1&nowplaying=true&format=json')
    .then(res => res.json())
    .then(data => {
      var track = data.recenttracks.track[0];

      document.getElementById("lastfm-info").innerHTML =
        "<p id=\"lastfm-status\"></p>" +
        "<img id=\"nowplaying\" height=15 width=15 src=\"assets/images/nowplaying.gif\" alt=\"nowplaying-status\">" +
        "<p id=\"lastfm-track\">" + track.name + "</p>" +
        "<p id=\"lastfm-artist\">" + track.artist["#text"] + "</p>";
      document.getElementById('lastfm-image').innerHTML = "<img height=85 width=85 src=\"" + track.image[2]["#text"] + "\" alt=\"nowplaying-artwork\">";

      if (track['@attr'] && track['@attr']['nowplaying']) {
        document.getElementById("lastfm").className = "nowplaying";
        document.getElementById("lastfm-status").innerHTML = null;
      } else {
        document.getElementById("lastfm").className = "";
        document.getElementById("lastfm-status").innerHTML = timeSince(new Date(1000 * track.date.uts));
      }

      document.getElementById("lastfm").style.display = "flex";
    })
}

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = seconds / 31536000;

  if (interval > 1) return Math.floor(interval) + " years ago";
  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + " months ago";
  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + " days ago";
  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + " hours ago";
  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + " minutes ago";
  return Math.floor(seconds) + " seconds ago";
}

// mouse parallax
document.addEventListener("mousemove", function (event) {
  if (/Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) === false) {
    this.getElementById("background").querySelectorAll('img').forEach(layer => {
      const speed = layer.getAttribute("speed")
      const x = (window.innerWidth - event.clientX * speed) / 100
      const y = (window.innerHeight - event.clientY * speed) / 100

      layer.style.transform = "translate(" + x + "px, " + y + "px)"
    })
  }
})