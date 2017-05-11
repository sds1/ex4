$(document).ready(function() {

	var link = $('.menu-link');
	var link_active = $('.menu-link_active');
	var menu = $('.menu');
	var nav_link = $('.menu a');

	link.click(function(){
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});
	nav_link.click(function(){
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});

	$('.slider1').owlCarousel({
    items:1,
    responsiveClass:true,
    margin:60,
    stagePadding:40,
    smartSpeed:450,
    nav:false
	});

	$('.slider2').owlCarousel({
		items:1,
    loop:true,
    margin:10,
    responsiveClass:true,
    nav:true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']
	});

	new WOW().init();

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.totop').addClass('active');
		} else {
			$('.totop').removeClass('active');
		}
	});

	$('.totop').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, "slow", 'swing');
	});

	$(window).on('load', function() { 
		$('.preloader').fadeOut('slow');
	});

});



























