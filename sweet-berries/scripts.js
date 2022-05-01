// Server Status
fetch('https://api.mcsrvstat.us/2/mc.vuxnq.me')
  .then(res => res.json())
  .then(data => {
    if (data.online === true) {
      document.getElementById('status').innerHTML = data.players.online + ' player(s) online';
    } else {
      document.getElementById('status').innerHTML = 'offline';
    }
  })

// Google Recaptcha
grecaptcha.ready(function () {
  grecaptcha.execute('6LdN9VQeAAAAAF81kR17w9hLF-hpyRD-oXjCgLfg', { action: 'homepage' })
    .then(function (token) {
      document.getElementById('captchaResponse').value = token;
    });
});