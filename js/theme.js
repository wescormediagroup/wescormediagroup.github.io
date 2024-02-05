// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

const expandImages = document.querySelectorAll('.expand-image');
const expandedImage = document.querySelector('.expanded-image');
const expandedImageImg = expandedImage.querySelector('img');

expandImages.forEach(expandImage => {
  expandImage.addEventListener('click', () => {
    expandedImageImg.src = expandImage.dataset.src;
    expandedImage.style.visibility = 'visible';
  });
});

expandedImage.addEventListener('click', () => {
  expandedImage.style.visibility = 'hidden';
});
