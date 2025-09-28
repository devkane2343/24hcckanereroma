// simple menu toggle + flickity init
document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menuToggle');
    var mobileMenu = document.getElementById('mobileMenu');
  
    if (menuToggle) {
      menuToggle.addEventListener('click', function () {
        var expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        mobileMenu.classList.toggle('hide');
      });
    }
  
    // Flickity init for non-data attribute case (already supported via data-flickity in markup)
    if (typeof Flickity !== 'undefined') {
      var els = document.querySelectorAll('.carousel');
      els.forEach(function (el) {
        if (!el.__flickity) {
          new Flickity(el, { contain: true, pageDots: false });
        }
      });
    }
  });
  