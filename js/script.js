$(document).ready(function(){
	$(".main").onepage_scroll({
	  	sectionContainer: "section",	
	  	loop: true,
	  	animationTime: 700,
	  	afterMove: function(index) {
	  		setTimeout(function(){
	  			$(".map").addClass('visible animated bounceInDown');
	  			$(".jump").addClass('visible animated bounce');
	  			$(".left").addClass('visible animated bounceInDown');
	  			$(".right").addClass('visible animated bounceInDown');
	  			$(".slider_border").addClass('visible animated bounceInUp');
	  		}, 100);
	  	},
	  	beforeMove: function(index) {
	  		setTimeout ( function(){
	  		$(".map").removeClass('visible animated bounceInDown');
	  		$(".left").removeClass('visible animated bounceInDown');
	  		$(".right").removeClass('visible animated bounceInDown');
	  		$(".slider_border").removeClass('visible animated bounceInUp');
	  	}, 100);
	  	}
	});


	/* ANIMATION*/
	jQuery('.map').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInDown',
		offset: 200
	});
	jQuery('.first_pace').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInDown',
		offset: 200
	});	
	jQuery('.second_place').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInUp',
		offset: 200
	});	
	jQuery('.third_place').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInUp',
		offset: 200
	});	
	jQuery('.slider__title').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeIn',
		offset: 200
	});	
	jQuery('.jump').addClass("visible animated bounce").viewportChecker({
		classToAdd: 'visible animated bounce',
		offset: 200
	});
	jQuery('.left').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInDown',
		offset: 200
	});
	jQuery('.right').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInDown',
		offset: 200
	});
	jQuery('.slider_border').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInUp',
		offset: 200
	});

	$(".first_pace").addClass('visible animated fadeInDown');
	$(".second_place").addClass('visible animated fadeInUp');
	$(".third_place").addClass('visible animated fadeInUp');
	$(".slider__title").addClass('visible animated fadeIn');

	/* modals */
	$('.btn_modalmap').click(function(){
		$('.modal').removeClass('hide');
	});
	$('#map-pop-up').click(function(){
		$('.modal').removeClass('hide');
	});
	$('.call-me').click(function(){
		$('.call-me-modal').removeClass('hide');
	});
	$('.call-us-button').click(function(e){
		e.preventDefault();
		$('.call-me-modal').removeClass('hide');
	});
	$('.exit').click(function(){
		$('.modal').addClass('hide');
	});
	$('.modal').click(function(){
		$('.modal').addClass('hide');
	});
	$('.call-me-modal').click(function(){
		$('.call-me-modal').addClass('hide');
	});

    /*slick*/

    $('.fame__slider').slick();
	$('.list_logo').slick({
    	dots: true,
    	arrows: false,
  		// autoplay: true,
  		// autoplaySpeed: 3500
  	});


    $('.arrow').click(function(){
    	$(".map").removeClass('visible animated bounceInDown');
    	setTimeout ( function(){
    		$(".map").addClass('visible animated bounceInDown');
	  	}, 200);
    	$('[data-index="1"]').removeClass('active');
    	$('[data-index="2"]').addClass('active');
    	$('body').removeClass('viewing-page-1')
    		.addClass('viewing-page-2');
    	$('.header').removeClass('active');
    	$('.about').addClass('active');
    	$('.onepage-wrapper').css("transform", "translate3d(0px, -100%, 0px)");
    });

    $('.slick-arrow').click(function(){
    	$(".first_pace").removeClass('visible animated fadeInDown');
    	$(".second_place").removeClass('visible animated fadeInUp');
	  	$(".third_place").removeClass('visible animated fadeInUp');
	  	$(".slider__title").removeClass('visible animated fadeIn');
    	setTimeout ( function(){
    		$(".first_pace").addClass('visible animated fadeInDown');
	  		$(".second_place").addClass('visible animated fadeInUp');
	  		$(".third_place").addClass('visible animated fadeInUp');
	  		$(".slider__title").addClass('visible animated fadeIn');
	  	}, 400);
    });

    $('.box__elem1').click(function(){
    	window.location.href = "options/"; 	
    	localStorage.setItem('opt', 'auto');
    });

    $('.box__elem2').click(function(){
    	localStorage.setItem('opt', 'umbrella');
    	window.location.href = "options/"; 	
    });

    $('.box__elem3').click(function(){
    	localStorage.setItem('opt', 'boat');
    	window.location.href = "options/"; 	
    });

    $('.box__elem4').click(function(){
    	localStorage.setItem('opt', 'home');
    	window.location.href = "options/"; 	
    });

    $('.box__elem5').click(function(){
    	localStorage.setItem('opt', 'life');
    	window.location.href = "options/"; 	
    });

    $('.box__elem6').click(function(){
    	localStorage.setItem('opt', 'all');
    	window.location.href = "options/"; 	
    });
});
