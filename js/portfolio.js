$(document).ready(function() {
	$('html').delay(400);
	$('html').fadeTo(700, 1);
	$('.intro').delay(1400);
	$('.intro').fadeTo(1000, 1);
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > 800){
        // Scroll Down
        $('header').removeClass('nav-up').addClass('nav-down');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
        	if (st < lastScrollTop && st < 900){
            $('header').removeClass('nav-down').addClass('nav-up');
        	}
        }
    }
    
    lastScrollTop = st;
}