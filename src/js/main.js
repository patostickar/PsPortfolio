// // COLOR MODE
// $('.color-mode').click(function () {
//   $('.color-mode-icon').toggleClass('active');
//   $('body').toggleClass('dark-mode');
// });

//HEADROOM
import Headroom from 'headroom.js';
const header = document.querySelector('.navbar');

const headroom = new Headroom(header);
headroom.init();

$(function () {
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

  // TOOLTIP
  $('.social-links a').tooltip();
});

// Get Year for Copyright
document.addEventListener('DOMContentLoaded', function () {
  let d = new Date();
  let n = d.getFullYear();
  document.getElementById('year').innerHTML = n;
});
