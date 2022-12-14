(function ($) {
  'use strict';

  // COLOR MODE
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active');
    $('body').toggleClass('dark-mode');
  });

  // HEADER
  $('.navbar').headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 10,
    nav: true,
  });

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();
})(jQuery);

// Get Year for Copyright
document.addEventListener('DOMContentLoaded', function () {
  let d = new Date();
  let n = d.getFullYear();
  document.getElementById('year').innerHTML = n;
});
