jQuery(document).ready(function($) {


	if(!isTouch()){
 
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
	}

	//mobile-nav

	


	function getEventHandlerType(){

	    return (isTouch()?'touchstart':'click');
	}

	function isTouch(){
	    return 'ontouchstart' in window || 'onmsgesturechange' in window;
	}

	$(document).on(getEventHandlerType(), function(e){
    //$(document).click(function(e) {
   	//$(document).on('click touchstart', function (e) {

    	//console.log('click');

	    var container = $('#mobile-header');
	    var btn = $('.btn-mobile-nav');

	    if(!btn.is(e.target)){ // make sure the target is not the mobile button

	    	if (container.hasClass('mobile-open') // check to see if the nav is open
	    	&& (!container.is(e.target)  // if the target of the click isn't the container...
	        && container.has(e.target).length === 0)) // ... nor a descendant of the container
		    {
		    	e.stopPropagation();
		    	e.preventDefault();

		        $('body').toggleClass('mobile-open');
		        $('html').toggleClass('noscroll');
	        	$('#mobile-header').toggleClass('mobile-open');
	        	$('.headroom--top').toggleClass('mobile-open');

	        	return false;
		    }
	    } else { //if it is then toggle the nav

	    	e.stopPropagation();
	    	e.preventDefault();

	        $('body').toggleClass('mobile-open');
	        $('html').toggleClass('noscroll');
	        $('#mobile-header').toggleClass('mobile-open');
	        $('.headroom--top').toggleClass('mobile-open');

	        return false;	
	    }
	    
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
        cssClasses: false,
        drag: function( event, ui ) {
        	ui.position.top = "0px";
        	$('.draggable.ui-draggable').css({top: 0});
        },
        stop: function( event, ui ) {
        	ui.position.top = "0px";
        	$('.draggable.ui-draggable').css({top: 0});
        },
        start: function( event, ui ) {
        	ui.position.top = "0px";
        	$('.draggable.ui-draggable').css({top: 0});
        }
    });

    
    $( '.droppable' ).droppable({
        activeClass: 'ui-state-hover',
        hoverClass: 'ui-state-active',
        cssClasses: false,
        drop: function( event, ui ) {
        	ui.position.top = "0px";
        	$('.draggable.ui-draggable.ui-draggable-handle').css({top: 0});
        },
        stop: function( event, ui ) {
        	ui.position.top = "0px";
        	$('.draggable.ui-draggable').css({top: 0});
        }
    });            
       
//Set Up Slider Click Events.
    $( '.biz-orig' ).click(function() {
        $('.draggable').css('left', '202px');
        hideElements();
        $('.tle-orig a').show();
        $('.tle-orig').addClass('active');
        $('.detail-orig').fadeIn();
    });
    
    $( '.biz-elite' ).click(function() {
        $('.draggable').css('left', '402px');
        hideElements();
        $('.tle-elite a').show();
        $('.tle-elite').addClass('active');
        $('.detail-elite').fadeIn();
    });
    
    $( '.biz-wide' ).click(function() {
        //alert('clock');
        $('.draggable').css('left', '602px');
        hideElements();
        $('.tle-wide a').show();
        $('.tle-wide').addClass('active');
        $('.detail-wide').fadeIn();
    });


    $( '.biz-sport' ).click(function() {
        //alert('clock');
        $('.draggable').css('left', '0px');
        hideElements();
        $('.tle-sport a').show();
        $('.tle-sport').addClass('active');
        $('.detail-sport').fadeIn();
    });

    $( '.hm-orig' ).click(function() {
        $('.draggable').css('left', '0px');
        hideElements();
        $('.tle-orig a').show();
        $('.tle-orig').addClass('active');
        $('.detail-orig').fadeIn();
    });
    
    $( '.hm-elite' ).click(function() {
        $('.draggable').css('left', '202px');
        hideElements();
        $('.tle-elite a').show();
        $('.tle-elite').addClass('active');
        $('.detail-elite').fadeIn();
    });
    
    $( '.hm-wide' ).click(function() {
        //alert('clock');
        $('.draggable').css('left', '402px');
        hideElements();
        $('.tle-wide a').show();
        $('.tle-wide').addClass('active');
        $('.detail-wide').fadeIn();
    });
            
//setup draggable
    $( '#orig' ).droppable({
        drop: function( event, ui ) {
            hideElements();
            $('.tle-orig a').show();
            $('.tle-orig').addClass('active');
            $('.detail-orig').fadeIn();
            //$('.draggable.ui-draggable.ui-draggable-handle').css({top: 0});      
        }
    });
    
    $( '#elite' ).droppable({
        drop: function( event, ui ) {
            hideElements();
            $('.tle-elite a').show();
            $('.tle-elite').addClass('active');
            $('.detail-elite').fadeIn();
            //$('.draggable.ui-draggable.ui-draggable-handle').css({top: 0});
        }
    });
    
    $( '#wide' ).droppable({
        drop: function( event, ui ) {
            hideElements();
            $('.tle-wide a').show();
            $('.tle-wide').addClass('active');  
            $('.detail-wide').fadeIn();
            //$('.draggable.ui-draggable.ui-draggable-handle').css({top: 0});        
        }
    });

    $( '#sport' ).droppable({
        drop: function( event, ui ) {
            hideElements();
            $('.tle-sport a').show();
            $('.tle-sport').addClass('active');
            $('.detail-sport').fadeIn(); 
            //$('.draggable.ui-draggable.ui-draggable-handle').css({top: 0});           
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