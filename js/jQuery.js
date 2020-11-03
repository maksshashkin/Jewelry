$(function () {
	/* Slider 1*/
	const Slider1 = $(".slider1");
	Slider1.owlCarousel({
		items: 4,
		smartSpeed: 2000,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: true,
		loop: true,
		dotsContainer: ('.dots-container'),
		dotsEach: true,
		responsive: {
			0: {
				items: 1,
				dotsEach: 2,
				
			},
			400: {
				items: 1,
				dotsEach: 2,
				stagePadding: 40,
			},
			500: {
				items: 1,
				dotsEach: 2,
				stagePadding: 80,
			},
			580: {
				items: 2,
				dotsEach: 2,
			},
			800: {
				items: 3,
				dotsEach: 2,
			},
			1100: {
				items: 4,
				dotsEach: 2,
			}
		}
	});
	$('#slider1_left').click(function () {
		Slider1.trigger('prev.owl.carousel');
	})

	$('#slider1_right').click(function () {
		Slider1.trigger('next.owl.carousel');
	})




	/* Slider 2*/
	const Slider2 = $(".slider2");
	Slider2.owlCarousel({
		items: 1,
		smartSpeed: 4000,
//		autoplay: true,
//		autoplayTimeout: 8000,
//		autoplayHoverPause: true,
//		loop: true,
		slideby: 2,
		dotsContainer: ('.dots-reviews'),

	});
	$('#slider2_left').click(function () {
		Slider2.trigger('prev.owl.carousel');
	})

	$('#slider2_right').click(function () {
		Slider2.trigger('next.owl.carousel');
	})
	
	
	
	/* Slider 3*/
	const Slider3 = $(".slider3");
	Slider3.owlCarousel({
		smartSpeed: 2000,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: true,
		loop: true,
		dotsContainer: ('.dots-slider3'),
		dotsEach: true,
		responsive: {
			0: {
				items: 1,
				dotsEach: 4,
				
			},
			400: {
				items: 1,
				dotsEach: 2,
				stagePadding: 50,
			},
			585: {
				items: 1,
				dotsEach: 2,
			},
			
		}
	});



	/* Modal-popup */
	const modalCall = $("[data-modal]");
	const modalClose = $("[data-close]");
	// открыть по кнопке
	modalCall.on("click", function (event) {
		event.preventDefault();
		let $this = $(this);
		let modalId = $this.data('modal');
		$(modalId).addClass('show');
		$("body").addClass('no-scroll');
	});

	// закрыть на крестик
	modalClose.on("click", function (event) {
		event.preventDefault();
		let $this = $(this);
		let modalParent = $this.parents('.intro-forma');
		modalParent.removeClass('show');
		$("body").removeClass('no-scroll');
	});


	// закрыть по клику вне окна
	$(".intro-forma").on("click", function (event) {
		let $this = $(this);
		$this.removeClass('show');
		$("body").removeClass('no-scroll');
	});
	$(".popup-wrapper__forma").on("click", function (event) {
		event.stopPropagation();
	});

/* Header menu */
	$("#burger_menu").on("click", function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#menu-list").toggleClass("active");
		$("body").toggleClass('no-scroll');
	});

});
