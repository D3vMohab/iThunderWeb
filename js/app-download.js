(function() {
  var preparingButton = document.querySelector('.preparing-button');
  var preparingButtonSeconds = document.querySelector('.preparing-button__seconds');
  var countdown = setInterval(function() {
    var secondsRemaining = parseInt(preparingButtonSeconds.innerHTML);
    preparingButtonSeconds.innerHTML = --secondsRemaining;
    if (secondsRemaining <= 0) {
      preparingButton.removeAttribute('disabled');
      clearInterval(countdown);
    }
  }, 1000);
})();