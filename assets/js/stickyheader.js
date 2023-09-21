$(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
        $('.sticky-header').css('top', '0');
      } else {
        $('.sticky-header').css('top', '-100px'); // Adjust to the height of your header
      }
    });
  });