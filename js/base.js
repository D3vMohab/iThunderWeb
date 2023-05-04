(function() {

  var lazyImages = document.querySelectorAll('img[data-src]');
  if ('IntersectionObserver' in window
      && 'IntersectionObserverEntry' in window
      && 'isIntersecting' in window.IntersectionObserverEntry.prototype) {
    var lazyImageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          lazyImageObserver.unobserve(entry.target);
        }
      })
    });
    for (var i = 0; i < lazyImages.length; i++) {
      lazyImageObserver.observe(lazyImages[i]);
    }
  } else {
    for (var i = 0; i < lazyImages.length; i++) {
      lazyImages[i].src = lazyImages[i].dataset.src;
    }
  }

  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 9) {
      document.body.classList.add('keyboard-navigation');
    }
  });

  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
  });
})();