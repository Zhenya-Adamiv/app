$(function() {


	svg4everybody();

	var header = $('.header');
		 header_mob = $('.header-menu_mobile');
		 header_icon = $('.header-icon');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 136) {
			header.addClass("scroll");
		} else {
			header.removeClass("scroll");
		}
	});

	header_icon.click(function(){
		$(this).toggleClass('open');
		header_mob.slideToggle(250).css('border-top', '1px solid rgba(74, 74, 74, 0.3)');
		header.toggleClass('open');
	});
	$('.header-menu_mobile ul a').click(function(){
		header_mob.slideUp(250);
		header_icon.toggleClass('open');
		header.toggleClass('open');
	});

	$(".header-menu, .header-menu_mobile, .footer-menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 70;
		$('body,html').animate({scrollTop: top}, 750);
	});

	var	product = $('.popup-product__content');
			product_hidden = $('.product-block .popup-hidden');
			formname = $('.popup-zakaz .input-formname');

		product_hidden.click(function(){
			product.empty();
			product.append($(this).html());
			$('.popup-product').modal({
				closeText: '&times;',
				fadeDuration: 80
			});
			
	});

	
	$('.popup-product button').click(function(){
		formname.empty();
		formname.append($('.popup-product__content .formname').html());
		$('.popup-zakaz').modal({
			closeText: '&times;',
			fadeDuration: 80
		});
	});

	$('.callback').click(function(){
		$('.popup-zvonok').modal({
			closeText: '&times;',
			fadeDuration: 80
		});
	});
	$('.map').click(function(){
		$('.popup-map').modal({
			closeText: '&times;',
			fadeDuration: 80
		});
	});

	$('.main .slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 750,
		dots: true,
		dotsClass: 'container dots',
		arrows: true,
		appendArrows: '.arrow-container',
		prevArrow: '<div class="arrow arrow-prev"></div>',
		nextArrow: '<div class="arrow arrow-next"></div>',
	});

	$('.sfera .slider').slick({
		speed: 500,
		fade: true,
		arrows: true,
		prevArrow: '<div class="arrow arrow-prev"></div>',
		nextArrow: '<div class="arrow arrow-next"></div>',
	});
	$('.gallery .slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		speed: 500,
		arrows: true,
		prevArrow: '<div class="arrow arrow-prev"></div>',
		nextArrow: '<div class="arrow arrow-next"></div>',
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				 slidesToShow: 2,
				 slidesToScroll: 1,
			  }
			},
			{
				breakpoint: 576,
				settings: {
				  infinite: true,
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  centerMode: true,
				}
			 },
		]	
	});


	var length = $('.main .slider ul.dots li').length;
	  $('.slider-max').html(length);
	  
	var max_col_height = 0;
	$('.product-block__title h2').each(function(){
		if ($(this).height() > max_col_height) {
			max_col_height = $(this).height();
		}
	});
	$('.product-block__title h2').height(max_col_height);

	var max_col_height = 0;
	$('.product-block').each(function(){
		if ($(this).height() > max_col_height) {
			max_col_height = $(this).height();
		}
	});
	$('.product-block').height(max_col_height);

	var max_col_height = 0;
	$('.advantages-block').each(function(){
		if ($(this).height() > max_col_height) {
			max_col_height = $(this).height();
		}
	});
	$('.advantages-block').height(max_col_height);
	

	$("form input[type=tel]").mask('0#');
   
});
