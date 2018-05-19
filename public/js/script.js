(function($) {
	
	"use strict";
	
	
	//1.Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}	
	
	//2.Update header style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			if (windowpos >= 150) {
				$('.main-header').addClass('fixed-header');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.main-header').removeClass('fixed-header');
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}	
	headerStyle();

	
	//3.Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}

	//4.Main BX-Slider
	if($('.events-slide').length){
		$('.events-slide').bxSlider({
			auto:true,
			mode:'vertical',
			nextSelector: '.events-section #slider-next',
	        prevSelector: '.events-section #slider-prev',
	        nextText: '<i class="fa fa-angle-right"></i>',
	        prevText: '<i class="fa fa-angle-left"></i>',
			maxSlides: 3,
			minSlides: 3,
			moveSlides: 1,
			pause: 5000,
			speed: 700,
			pagerCustom: '.events-section .slider-pager .thumb-box'
		});
	}	

	//5.Search Toggle Btn
    if($('.toggle-search').length){
        $('.toggle-search').on('click', function() {
            $('.header-search').slideToggle(300);
        });

    }	
	
	//6.Revolution Slider Style One
	if($('.main-slider .tp-banner').length){

		jQuery('.main-slider .tp-banner').show().revolution({
		  dottedOverlay:'none',
		  delay:10000,
		  startwidth:1200,
		  startheight:650,
		  hideThumbs:600,

		  thumbWidth:80,
		  thumbHeight:50,
		  thumbAmount:5,

		  navigationType:"bullet",
		  navigationArrows:"0",
		  navigationStyle:"preview3",

		  touchenabled:"on",
		  onHoverStop:"off",

		  swipe_velocity: 0.7,
		  swipe_min_touches: 1,
		  swipe_max_touches: 1,
		  drag_block_vertical: false,

		  parallax:"mouse",
		  parallaxBgFreeze:"on",
		  parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

		  keyboardNavigation:"off",

		  navigationHAlign:"center",
		  navigationVAlign:"bottom",
		  navigationHOffset:0,
		  navigationVOffset:40,

		  soloArrowLeftHalign:"left",
		  soloArrowLeftValign:"center",
		  soloArrowLeftHOffset:20,
		  soloArrowLeftVOffset:20,

		  soloArrowRightHalign:"right",
		  soloArrowRightValign:"center",
		  soloArrowRightHOffset:20,
		  soloArrowRightVOffset:20,

		  shadow:0,
		  fullWidth:"on",
		  fullScreen:"off",

		  spinner:"spinner4",

		  stopLoop:"off",
		  stopAfterLoops:-1,
		  stopAtSlide:-1,

		  shuffle:"off",

		  autoHeight:"off",
		  forceFullWidth:"on",

		  hideThumbsOnMobile:"on",
		  hideNavDelayOnMobile:1500,
		  hideBulletsOnMobile:"on",
		  hideArrowsOnMobile:"on",
		  hideThumbsUnderResolution:0,

		  hideSliderAtLimit:0,
		  hideCaptionAtLimit:0,
		  hideAllCaptionAtLilmit:0,
		  startWithSlide:0,
		  videoJsPath:"",
		  fullScreenOffsetContainer: ""
	  });

	}	
	
	//7.Mixitup Gallery
	if($('.mixitup-gallery').length){
		$('.mixitup-gallery').mixItUp({});
	}	
	
 
 	//8.MasterSlider
    var slider = new MasterSlider();
    slider.setup('masterslider' , {
        loop:true,
        width:100,
        height:100,
        speed:20,
        view:'basic',
        preload:0,
        space:30,
        space:30
    });
    slider.control('arrows');
    slider.control('slideinfo',{insertTo:'#staff-info'});
     


	//9.Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : 0 
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on(function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.bind('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}	
	enableMasonry();
	

   //10.Gallery masonary style
	if ($('.item-container').length) {
	   $('.item-container').isotope({
	   layoutMode:'masonry'
	   });
	}


	//11.Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}

	//11.progressBarConfig
	function progressBarConfig () {
	  var progressBar = $('.progress');
	  if(progressBar.length) {
	    progressBar.each(function () {
	      var Self = $(this);
	      Self.appear(function () {
	        var progressValue = Self.data('value');

	        Self.find('.progress-bar').animate({
	          width:progressValue+'%'           
	        }, 100);

	        Self.find('span.value').countTo({
	          from: 0,
	            to: progressValue,
	            speed: 100
	        });
	      });
	    })
	  }
	}

    //12.Fact Counter
	function CounterNumberChanger () {
	 var timer = $('.timer');
	 if(timer.length) {
	  timer.appear(function () {
	   timer.countTo();
	  })
	 }
	}

	//13.Fact Counter
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .counter-column.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
				
			});
		}
	}

	//14.Accordion Box
	if ($('.accordion-box').length) {
        $('.accordion-box .acc-btn').on('click', function() {
            if ($(this).hasClass('active') !== true) {
                $('.accordion-box .acc-btn').removeClass('active');
            }

            if ($(this).next('.acc-content').is(':visible')) {
                $(this).removeClass('active');
                $(this).next('.acc-content').slideUp(500);
            } else {
                $(this).addClass('active');
                $('.accordion-box .acc-content').slideUp(500);
                $(this).next('.acc-content').slideDown(500);
            }
        });
    }

    //15.testimonials
    $(document).ready(function() {

	    var sync1 = $("#sync1");
	    var sync2 = $("#sync2");
	    var slidesPerPage = 5; //globaly define number of elements per page
	    var syncedSecondary = true;

	    sync1.owlCarousel({
	        items : 1,
	        slideSpeed : 2000,
		    nav: false,
		    autoplay: true,
		    dots: false,
		    loop: true,
		    responsiveRefreshRate : 200,
		    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
		}).on('changed.owl.carousel', syncPosition);

		sync2
		    .on('initialized.owl.carousel', function () {
		      sync2.find(".owl-item").eq(0).addClass("current");
		    })
		    .owlCarousel({
		    items : 5,
		    dots: false,
		    nav: false,
		    smartSpeed: 200,
		    slideSpeed : 500,
		    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
		    responsiveRefreshRate : 100
		}).on('changed.owl.carousel', syncPosition2);

		function syncPosition(el) {
		    //if you set loop to false, you have to restore this next line
		    //var current = el.item.index;
		    
		    //if you disable loop you have to comment this block
		    var count = el.item.count-1;
		    var current = Math.round(el.item.index - (el.item.count/4) - .5);
		    
		    if(current < 0) {
		      current = count;
		    }
		    if(current > count) {
		      current = 0;
		    }
		    
		    //end block

		    sync2
		      .find(".owl-item")
		      .removeClass("current")
		      .eq(current)
		      .addClass("current");
		    var onscreen = sync2.find('.owl-item.active').length - 1;
		    var start = sync2.find('.owl-item.active').first().index();
		    var end = sync2.find('.owl-item.active').last().index();
		    
		    if (current > end) {
		      sync2.data('owl.carousel').to(current, 100, true);
		    }
		    if (current < start) {
		      sync2.data('owl.carousel').to(current - onscreen, 100, true);
		    }
		}
		  
		function syncPosition2(el) {
		    if(syncedSecondary) {
		      var number = el.item.index;
		      sync1.data('owl.carousel').to(number, 100, true);
		    }
		}
		  
		sync2.on("click", ".owl-item", function(e){
		    e.preventDefault();
		    var number = $(this).index();
		    sync1.data('owl.carousel').to(number, 300, true);
		});
	});

	
	//16.Sponsors Slider
	if ($('.sponsors-slider').length) {
		$('.sponsors-slider').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 400,
			autoplay: 4000,
			navText: [],
			responsive:{
				300:{
					items:1
				},
				400:{
					items:2
				},
				800:{
					items:3
				},
				1200:{
					items:5
				}
			}
		});    		
	}	

	//17.Four Column Carousel Slider
	if ($('.four-column-carousel').length) {
		$('.four-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1070:{
					items:4
				}
			}
		});    		
	}

		//18.Three Column Carousel Slider

	if ($('.three-column-carousel').length) {
		$('.three-column-carousel').owlCarousel({
		    loop: true,
		    margin: 30,
		    nav: true,
		    navText: [ '<span class="fa fa-long-arrow-left"></span>', '<span class="fa fa-long-arrow-right"></span>' ],
	        dots: false,
		    autoWidth: false,
		    autoplay:false,
		    smartSpeed: 150000,
		    autoplayTimeout:3000,
		    responsive: {
		        0:{
		            items:1,
		            autoWidth: false
		        },
		        767:{
		            items:2,
		            autoWidth: false
		        },
		        992:{
		            items:3,
		            autoWidth: false
		        }
		    }
		});
	}





	
	//19.Two Column Carousel Slider
	if ($('.two-column-carousel').length) {
		$('.two-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				1200:{
					items:2
				}
			}
		});    		
	}	
	
	//20.Single Item Slider
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 700,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}	

	//21.LightBox / Fancybox
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}	
	
	//22.videoFancybox
	function videoFancybox () {
	 if ($('.video-fancybox').length) {
	  $('.video-fancybox').on('click', function () {
	   $(this).fancybox({
	    'padding' : 0,
	    'autoScale' : false, 
	    'transitionIn' : 'none', 
	    'transitionOut' : 'none', 
	    'title' : this.title, 
	    'width' : 640, 
	    'height' : 385, 
	    'href' : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'), 
	    'type' : 'swf', 
	    'swf' : { 'wmode' : 'transparent', 'allowfullscreen' : 'true' }
	   });
	   return false;
	  })
	 };
	}
	
	//23.Contact Form Validation
	// if($('#contact_form').length){
	// 	$("#contact_form").validate({
	// 	    submitHandler: function(form) {
	// 	      var form_btn = $(form).find('button[type="submit"]');
	// 	      var form_result_div = '#form-result';
	// 	      $(form_result_div).remove();
	// 	      form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
	// 	      var form_btn_old_msg = form_btn.html();
	// 	      form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
	// 	      $(form).ajaxSubmit({
	// 	        dataType:  'json',
	// 	        success: function(data) {
	// 	          if( data.status == 'true' ) {
	// 	            $(form).find('.form-control').val('');
	// 	          }
	// 	          form_btn.prop('disabled', false).html(form_btn_old_msg);
	// 	          $(form_result_div).html(data.message).fadeIn('slow');
	// 	          setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
	// 	        }
	// 	      });
	// 	    }
	// 	});
	// }
	
	//24.Gallery Popup Hide / Show
	if($('.has-gallery-popup').length){
		
		//Show Gallery Popup
		$('.has-gallery-popup').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('body').addClass('popup-visible');
			$(target).addClass('now-visible');
		});
		
		//Show Gallery Popup
		$('.gallery-box .btn-close,.gallery-box .bg-fade-layer').on('click', function() {
			$('.gallery-box').removeClass('now-visible');
			$('body').removeClass('popup-visible');
		});
		
	}

	//25.Gallery Popup Slider / Vertical Gallery Slider
	if($('.vertical-slider').length) {
		var slider = new MasterSlider();
		slider.setup('masterslider' , {
			width:850,
			height:470,
			space:10,
			view:'basic',
			dir:'v'
		});
		slider.control('arrows');	
		slider.control('scrollbar' , {dir:'v'});	
		slider.control('circletimer' , {color:"#FFFFFF" , stroke:9});
		slider.control('thumblist' , {autohide:false ,dir:'v'});
	}	
	
	//26.Countdown Timer
	if ($('.countdown').length) {
	    $('.countdown').countdown('2018/1/1', function (event) {
	        var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span><br>Days</div> ' + '<div class="counter-column"><span class="count">%H</span><span class="colon"></span><br>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span><span class="colon"></span><br>Mutines</div>  ' + '<div class="counter-column"><span class="count">%S</span><span class="colon"></span><br>Seconds</div>'));
	    });
	}

	
	//27.Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}





/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions
			factCounter();
			enableMasonry();
		})(jQuery);
	});
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		CounterNumberChanger();
		headerStyle();
	});
	
/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		progressBarConfig();
	});

	

})(window.jQuery);