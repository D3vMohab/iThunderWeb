(function() {
  var apps = document.querySelectorAll('.app-preview');
  var appCategories = document.querySelectorAll('.app-category');
  document.querySelector('.search').onkeyup = function (event) {
    var query = event.target.value.toLowerCase();
    for (var i = 0; i < apps.length; i++) {
      if (query && apps[i].dataset.name.toLowerCase().indexOf(query) === -1) {
        apps[i].classList.add('hidden');
      } else {
        apps[i].classList.remove('hidden');
      }
    }
    for (var i = 0; i < appCategories.length; i++) {
      if (((appCategories[i].classList.contains('app-category--popular') || appCategories[i].classList.contains('app-category--latest')) && query) || !appCategories[i].querySelectorAll('.app-preview:not(.hidden)').length) {
        appCategories[i].classList.add('hidden');
      } else {
        appCategories[i].classList.remove('hidden');
      }
    }
  };
})();