// Scrollspy Vanilla tweaked for table of contents
(function() {
  'use strict';

  var section = document.querySelectorAll(".subsection");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop+950;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
})();

// Initiate smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    easing: 'easeInOutCubic',
    offset: 20
});

// Keep table of contents in position and only show if it exists
if (document.getElementById("tableOfContents")){
    var sticky = new Sticky('.toc');
}
// Show scroll top button when appropriate and fade frame
contentId = document.getElementById("mainContent");
showScroll = document.getElementById("scrollTop");

// .querySelector('.overlay').classList.add(
var myScrollFunc = function() {
  var y = contentId.getBoundingClientRect().top;
  if (y <= 200) {
    showScroll.className = "scroll-top opacity-1",
    $('.fadable').addClass('opacity-25');
    $('.scroll-down-icon').addClass('opacity-0');
  } else {
    showScroll.className = "scroll-top opacity-0",
    $('.fadable').removeClass('opacity-25');
    $('.scroll-down-icon').removeClass('opacity-0');

  }
};
window.addEventListener("scroll", myScrollFunc);

// Lazyload images
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
});
