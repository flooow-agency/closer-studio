"use strict";

jQuery(function ($) {
  var mobileMenuOverlay = $(".mobile-menu");
  var mobileMenuButton = $(".header__icon");
  var body = $("body");
  mobileMenuButton.click(function (event) {
    event.stopPropagation();
    mobileMenuOverlay.slideToggle();
  });
  body.click(function () {
    mobileMenuOverlay.slideUp();
  });
});
"use strict";

jQuery(function ($) {
  var openLink = $('.shrink-text__link').eq(0);
  var closeLink = $('.shrink-text__link').eq(1);
  var dropdown = $('.shrink-text__full');
  openLink.click(function (event) {
    event.preventDefault();
    dropdown.slideDown();
    openLink.hide();
  });
  closeLink.click(function (event) {
    event.preventDefault();
    dropdown.slideUp();
    openLink.fadeIn();
  });
});