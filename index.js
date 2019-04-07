$(document).ready(function () {
	//
	$(".ham").click(function () {
		$("#nav-icon").toggleClass('open');
		$('.navigator .navigator').css('display', 'none');
		$(".navigator").slideToggle();
	});
	$(".navigator .actual").click(function () {
		if ($(window).width() < 426) {
			$("#nav-icon").toggleClass('open');
			$(".navigator").slideUp();
			$(this).find(".actual").slideToggle();
		}
	});
	$(window).resize(function () {
		if ($(window).width() > 425) {
			$(".navigator").removeAttr('style');
		}
	});
	//
	///
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
	///
	////
	$('.navigator .actual a').click(function (e) {
		let targetHref = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(targetHref).offset().top - 40
		}, 500);
		e.preventDefault();
	});
	////

	/////
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
					width: $(this).attr('howMuch')
				}, 5000);
			});

		}

	});
	/////

})


// $(".actual").hover(function () {
// 	$(this).find(".dot").animate({
// 		width: 'toggle'
// 	}, 400);
// });
//scrollDown Gif
//add fadeout effect
//add animated gif
//add function for running again if user return to top ;