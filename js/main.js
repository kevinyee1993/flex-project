(function($) {
var App = { init: function() { App.HomepageHeight();           // helper script to set homepage to full height
                               App.HomepageOpacity();          // changes homepage opacity on scroll
							   App.MaxImage_Video();           // homepage background - video
							   App.MaxImage_Slider();          // homepage background - image slider
							   App.MaxImage_Single();          // homepage background - vingle image
							   App.ScrollToSomeplace();        // script resposible for smooth scrolling after clicking on menu item
							   App.FormValidation();           // newsletter form validation
							   App.ContactForm();              // contact form
							   App.Fit_Vids();                 // responsive videos
							   App.Stellar();                  // parallax effect
							   App.Reviews();                  // reviews carousel
							   App.Screenshots_Carousel();     // screenshots carousel 
							   App.Nivo_Lightbox();            // lightbox
							   App.Elements_animation();       // animations
							   },

	// Homepage Height
	HomepageHeight: function() {
	"use strict"; 
	    var h = window.innerHeight;
	    $('.hero_fullscreen').css('height', h );
	    $('.mockup').css('height', h );
	},
	
	
	// Homepage Opacity - for single background image version
	HomepageOpacity: function() {
    "use strict"; 
        var h = window.innerHeight;
        $(window).on('scroll', function() {
            var st = $(this).scrollTop();
            $('#maximage_single').css('opacity', (1-st/h) );
        });
    },
	
	
	// MaxImage Fullscreen Background Slider
	MaxImage_Video: function() {
	"use strict";
	    jQuery('video, object').maximage('maxcover');
	    
	    // detecting if browser is mobile and disabling the video background, leaving only poster as bg.
		if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)
		 ){
		    $('#maximage_video video').css('display', 'none' );
		    classie.add( document.getElementById( 'maximage_video' ), 'mobile_novideo' );
		  };
	},
	
	
	// MaxImage Fullscreen Background Slider
	MaxImage_Slider: function() {
	"use strict"; 
	    $('#maximage_slider').maximage();
	},
	
	
	// MaxImage Fullscreen Background Slider
	MaxImage_Single: function() {
	"use strict";
	    $('#maximage_single').maximage();
	},
	
	
	// Scroll To ...
    ScrollToSomeplace: function() {
    $('.go_to_home').click(function () {$.scrollTo('.hero_fullscreen',1000,{easing:'easeInOutExpo','axis':'y'});return false}); 
    
    var lastId,
    navbarheight = $("#menu_bar").outerHeight()+1;
    topMenu = $('.menu_bar_navigation, .navigation_desktop, #mobile_menu_content, .cta_button_area');
    menuItems = topMenu.find('a');
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });
 
    menuItems.click(function(e){
        var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-navbarheight+2;
        $('html, body').stop().animate({ scrollTop: offsetTop  }, 1000, 'easeInOutExpo');
        e.preventDefault();
    });
 
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+navbarheight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
                                if ($(this).offset().top < fromTop)
                                return this;
                                });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
        .parent().removeClass("active")
        .end().filter("[href=#"+id+"]").parent().addClass("active");
        }                   
    });
    
    },
    
    
	// Newsletter Form Validation
    FormValidation: function() {
	    function isValidEmailAddress(emailAddress) {
	    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
	    return pattern.test(emailAddress);
		};
    
	    $('#subscribe-form').isHappy({
	    submitButton: '#subscribe-form-submit',
	    fields: {
	      '#email': {
	        required: true,
	        message: 'Please enter a valid e-mail address!',
	        test: isValidEmailAddress
	      }
	    }
		});
    },
    
    
    // Contact Form
    ContactForm: function() {
	     "use strict";
	    var options = {target: "#alert"}
	    $("#contact-form").ajaxForm(options);
    },
    
    
    // Elements Animation
    Elements_animation: function() {
		$('#more_info').waypoint(function() {
            setTimeout(function(){$('.content_anim1').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim2').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('.content_anim3').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('.content_anim4').addClass('animated fadeInUp')},600);
            setTimeout(function(){$('.content_anim5').addClass('animated fadeInUp')},800);
        }, { offset: '50%' });    
    
    	$('#features').waypoint(function() {
            setTimeout(function(){$('.content_anim6').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim7').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('.content_anim8').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('.content_anim9').addClass('animated fadeInUp')},600);
            setTimeout(function(){$('.content_anim10').addClass('animated fadeInUp')},800);
        }, { offset: '50%' });
        
        $('#features_video').waypoint(function() {
            setTimeout(function(){$('.content_anim11').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim12').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('.content_anim13').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('.content_anim14').addClass('animated fadeInUp')},600);
            setTimeout(function(){$('.content_anim15').addClass('animated fadeInUp')},800);
            setTimeout(function(){$('.content_anim16').addClass('animated fadeInUp')},1000);
        }, { offset: '50%' });
        
        $('#reviews').waypoint(function() {
            setTimeout(function(){$('.content_anim17').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim18').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('.content_anim19').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('.content_anim20').addClass('animated fadeInUp')},600);
            setTimeout(function(){$('.content_anim21').addClass('animated fadeInUp')},800);
            setTimeout(function(){$('.content_anim22').addClass('animated fadeInUp')},1000);
            setTimeout(function(){$('.content_anim23').addClass('animated fadeInUp')},1200);
            setTimeout(function(){$('.content_anim24').addClass('animated fadeInUp')},1400);
        }, { offset: '50%' });

        $('#screenshots').waypoint(function() {
            setTimeout(function(){$('.content_anim25').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim26').addClass('animated fadeInUp')},200);
        }, { offset: '50%' });
        
        $('#newsletter').waypoint(function() {
            setTimeout(function(){$('.content_anim27').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim28').addClass('animated fadeInUp')},200);
        }, { offset: '50%' }); 
        
        $('#contact').waypoint(function() {
            setTimeout(function(){$('.content_anim29').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim30').addClass('animated fadeInUp')},200);
        }, { offset: '50%' });          
        
    },
    
    
    // Nivo Lightbox
    Nivo_Lightbox: function() {
	    $('.play a, .owl-carousel-screenshots a').nivoLightbox({
		    effect: 'slideDown'    
	    });	
    },
    
    
    // Fit Vids
    Fit_Vids: function() {
	    $("#video_modal_box").fitVids();	
    },
    
    
    // Parallaxed Backgrounds
    Stellar: function() {
    
    	// detecting if browser is mobile and disabling the video background, leaving only poster as bg.
		if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)
		 ){} else {
			 $(window).stellar({responsive: true});	 
		 };    	
    },
    
    // Reviews Carousel
    Reviews: function() {
	    $(".owl-carousel").owlCarousel({
		    loop:true,
		    singleItem : true,
	    });	
    },
    
    // Screenshots Carousel
    Screenshots_Carousel: function() {
	    $(".owl-carousel-screenshots").owlCarousel({
			loop:true,
		    items : 7,
			itemsDesktop : [1200,7], 
			itemsDesktopSmall : [900,6], 
			itemsTablet: [600,4], 
			itemsMobile : [400,2]     
	    });	
    },    

}

$(function() {
  App.init();
  $(window).resize(App.HomepageHeight);
    
});

})(jQuery);