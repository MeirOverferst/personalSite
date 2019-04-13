$(document).ready(function () {

	let userTime = new Date().getHours();
	let msg;
	let morning = ('Good morning');
	let afternoon = ('Good afternoon');
	let evening = ('Good evening');

	if (userTime >= 0 && userTime < 12) {
		msg = morning; 

	} else if (userTime >= 12 && userTime < 17) {
		msg = afternoon;

	} else if (userTime >= 17 && userTime < 24) {
		msg = evening;
	}
    $('.greet').prepend(msg);
	
	$(".ham").click(function () {
		$("#nav-icon").toggleClass('open');
		$('.navigator .navigator').css('display', 'none');
		$(".navigator").slideToggle();
	});
	$(".navigator .actual").click(function () {
		if ($(window).width() <600) {
			$("#nav-icon").toggleClass('open');
			$(".navigator").slideUp();
			$(this).find(".actual").slideToggle();
		}
	});
	$(window).resize(function () {
		if ($(window).width() > 600) {
			$(".navigator").removeAttr('style');
		}
	});

	$('.slide-container').each(function () {
		let currentslide = 0;
		let $slider = $(this).find('.slide-item'),
			$parent = $(this),
			$next = $parent.find(".slide-next"),
			$prev = $parent.find(".slide-prev");

		function slide() {
			let item = $slider.eq(currentslide).fadeIn();
			$slider.hide();
			item.css("display", "inline-block");
		}
		slide();

		function next(event) {
			event.preventDefault();
			currentslide += 1;
			if (currentslide > $slider.length - 1) {
				currentslide = 0;
			}
			slide();
		}

		function prev(event) {
			event.preventDefault();
			currentslide -= 1;
			if (currentslide < 0) {
				currentslide = $slider.length - 1;
			}
			slide();
		}
		$next.on("click", next);
		$prev.on("click", prev);
	});


	$('.navigator .actual a').click(function (e) {
		let targetHref = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(targetHref).offset().top - 25
		}, 500);
		e.preventDefault();
	});
	$(window).scroll(function () {
		let sections = ['home', 'projects', 'skills', 'about', 'contact'];
		let current;
		for (let i = 0; i < sections.length; i++) {
			if ($('#' + sections[i]).offset().top - 75 <= $(window).scrollTop()) {
				current = sections[i];
			}
		}
		$(".actual a[href='#" + current + "']").addClass('active');
		$(".actual a").not("a[href='#" + current + "']").removeClass('active');
		//////////////////////
		if ($('.shower').show()) {
			$('.shower').hide()
		}
		//Skills Bar
		let hT = $('.skillsh1').offset().top;
		let hH = $('.skillsh1').outerHeight();
		let wH = $(window).height();
		let wS = $(this).scrollTop();
		if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH)) {
			$('.skillbar').each(function () {
				$(this).find('.skillbar-bar').animate({
					height: $(this).attr('howMuch')
				}, 5000);
			});

		}

	});
	/////

})
