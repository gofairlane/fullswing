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

    //sim selector

    // setup defaults
	hideElements = function(){
		$('.slide-title a').hide();
		$('.slide-title').removeClass('active');
        $('.sim-detail').hide();
	}

    accordReset = function(){
        $('.sim-detail').hide();
        $('.accord').removeClass('active');

    }
        
//setup elements        
    $( '.draggable' ).draggable({ 
        revert: 'invalid',
        snap: '.droppable',
        snapMode: 'inner',
        snapTolerance: 30,
        top: '0px',
        axis: 'x',
        containment: '.slide-container .slide',
        cssClasses: false
    });
    
    $( '.droppable' ).droppable({
        activeClass: 'ui-state-hover',
        hoverClass: 'ui-state-active',
        cssClasses: false,
        drop: function( event, ui ) {}
    });            
       
//Set Up Slider Click Events.
    $( '#orig' ).click(function() {
        $('.draggable').css('left', '0px');
        hideElements();
        $('.tle-orig a').show();
        $('.tle-orig').addClass('active');
        $('.detail-orig').fadeIn();
    });
    
    $( '#elite' ).click(function() {
        $('.draggable').css('left', '202px');
        hideElements();
        $('.tle-elite a').show();
        $('.tle-elite').addClass('active');
        $('.detail-elite').fadeIn();
    });
    
    $( '#wide' ).click(function() {
        //alert('clock');
        $('.draggable').css('left', '402px');
        hideElements();
        $('.tle-wide a').show();
        $('.tle-wide').addClass('active');
        $('.detail-wide').fadeIn();
    });


    $( '#sport' ).click(function() {
        //alert('clock');
        $('.draggable').css('left', '602px');
        hideElements();
        $('.tle-sport a').show();
        $('.tle-sport').addClass('active');
        $('.detail-sport').fadeIn();
    });
            
//setup draggable
    $( '#orig' ).droppable({
        drop: function( event, ui ) {
            hideElements();
            $('.tle-orig a').show();
            $('.tle-orig').addClass('active');
            $('.detail-orig').fadeIn();       
        }
    });
    
    $( '#elite' ).droppable({
        drop: function( event, ui ) {
            hideElements();
            $('.tle-elite a').show();
            $('.tle-elite').addClass('active');
            $('.detail-elite').fadeIn();
        }
    });
    
    $( '#wide' ).droppable({
        drop: function( event, ui ) {
            hideElements();
            $('.tle-wide a').show();
            $('.tle-wide').addClass('active');  
            $('.detail-wide').fadeIn();         
        }
    });

    $( '#sport' ).droppable({
        drop: function( event, ui ) {
            hideElements();
            $('.tle-sport a').show();
            $('.tle-sport').addClass('active');
            $('.detail-sport').fadeIn();            
        }
    });

//Setup Accordion for Mobile
    $( '.ac-orig' ).click(function() {
        accordReset();
        $(this).addClass('active');
        $('.detail-orig').fadeIn();
    });
    
    $( '.ac-elite' ).click(function() {
        accordReset();
        $(this).addClass('active');
        $('.detail-elite').fadeIn();
    });
    
    $( '.ac-wide' ).click(function() {
        accordReset();
        $(this).addClass('active');
        $('.detail-wide').fadeIn();
    });


    $( '.ac-sport' ).click(function() {
        accordReset();
        $(this).addClass('active');
        $('.detail-sport').fadeIn();
    });
 
});