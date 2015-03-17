jQuery(document).ready(function($) {
 
	$(".header").headroom({
		// scroll tolerance in px before state changes
		"tolerance": 0,
 
		// vertical offset in px before element is first unpinned
		"offset": 100, /* set this to height of your header */
 
		"classes": {
			// when element is initialised
			"initial": "animated",
 
			// when scrolling up
			"pinned": "slideDown",
 
			// when scrolling down
			"unpinned": "slideUp",
 
			// when above offset
			"top": "headroom--top",
 
			// when below offset
			"notTop": "headroom--not-top"
		}
	});

	//mobile-nav
	$( '.btn-mobile-nav' ).click(function() {
        $('body').toggleClass('mobile-open');
        $('#mobile-header').toggleClass('mobile-open');
        $('.headroom--top').toggleClass('mobile-open');
    });
 
});