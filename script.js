document.addEventListener("DOMContentLoaded", function() {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
      if (tab.href === window.location.href) {
        tab.classList.add('active');
      }
    });
  });