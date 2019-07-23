// Scrollspy Vanilla tweaked for table of contents


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
showScroll = document.getElementById("scrollTopButton");

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

$('#mobileMenuToggle, .mobile-menu-overlay a').click(function() {
   $('#mobileMenuToggle').toggleClass('active');
   $('#mobileMenuOverlay').toggleClass('open');
   $('body').toggleClass('fixed');
  });

//   $('#mobileMenuToggle a').click(function() {
//
// }
