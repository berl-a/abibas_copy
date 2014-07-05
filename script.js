$(document).ready(
	function () {
		$('input').focus(
			function () {
				$(this).removeAttr('placeholder');
			}
		);

		/*** PLACING MENUs ***/

		var i = 0;

		var intervalID;

		var placeMenus = function () {

			i++;

			if (i < 8) {

				var pos_of_a = $('nav .nav_wrapper ul:first-of-type li:last-of-type a').position();
				var height_of_a = $('nav .nav_wrapper ul:first-of-type li:last-of-type a').outerHeight();

				$('nav+ul').css({
					'left': pos_of_a.left + 'px',
					'top': pos_of_a.top + height_of_a + 1 + 'px'
				});

				pos_of_a = $('nav .nav_wrapper ul:last-of-type li:last-of-type a').position();
				height_of_a = $('nav .nav_wrapper ul:last-of-type li:last-of-type a').outerHeight();

				$('nav+ul+ul').css({
					'left': pos_of_a.left + 'px',
					'top': pos_of_a.top + height_of_a + 1 + 'px'
				});
			}else 
				clearInterval(intervalID);
		}

		intervalID = setInterval(placeMenus, 500);

		/*** MENU 1 ***/

		var mouse_on_menu1 = false;
		var mouse_on_a1 = false;

		var menu_opened1 = false;

		$('nav .nav_wrapper ul:first-of-type li:last-of-type a').hover(
			function () {

				$(this).css({
					'background-color': 'white',
					'color': 'black'
				});

				mouse_on_a1 = true;

				if (!menu_opened1) {
					$('nav+ul').show();
					$('nav+ul').animate({
							'opacity': '1'
						},
						100
					);
					menu_opened1 = true;
				}

			},

			function () {
				mouse_on_a1 = false;

				setTimeout(
					function () {
						if (!mouse_on_menu1) {

							$('nav .nav_wrapper ul:first-of-type li:last-of-type a').css({
								'background-color': 'black',
								'color': 'white'
							});

							$('nav+ul').animate({
									'opacity': '0'
								},
								100,
								function () {
									$('nav+ul').hide();
								}
							);
							menu_opened1 = false;
						}
					}, 20
				);

			}
		);

		$('nav+ul').hover(
			function () {
				mouse_on_menu1 = true;

				$('nav .nav_wrapper ul:first-of-type li:last-of-type a').css({
					'background-color': 'white',
					'color': 'black'
				});
			},

			function () {
				mouse_on_menu1 = false;

				$('nav .nav_wrapper ul:first-of-type li:last-of-type a').css({
					'background-color': 'black',
					'color': 'white'
				});

				setTimeout(
					function () {
						if (!mouse_on_a1) {
							$('nav+ul').animate({
									'opacity': '0'
								},
								100,
								function () {
									$('nav+ul').hide();
								}
							);
							menu_opened1 = false;
						}
					}, 60
				);
			}
		);

		/*** MENU 2 ***/

		var mouse_on_menu2 = false;
		var mouse_on_a2 = false;

		var menu_opened2 = false;

		$('nav .nav_wrapper ul:last-of-type li:last-of-type a').hover(
			function () {

				$(this).css({
					'background-color': 'white',
					'color': 'black'
				});

				mouse_on_a2 = true;

				if (!menu_opened2) {
					$('nav+ul+ul').show();
					$('nav+ul+ul').animate({
							'opacity': '1'
						},
						100
					);
					menu_opened2 = true;
				}

			},

			function () {
				mouse_on_a2 = false;

				setTimeout(
					function () {
						if (!mouse_on_menu2) {

							$('nav .nav_wrapper ul:last-of-type li:last-of-type a').css({
								'background-color': 'black',
								'color': 'white'
							});

							$('nav+ul+ul').animate({
									'opacity': '0'
								},
								100,
								function () {
									$('nav+ul+ul').hide();
								}
							);
							menu_opened2 = false;
						}
					}, 20
				);

			}
		);

		$('nav+ul+ul').hover(
			function () {
				mouse_on_menu2 = true;

				$('nav .nav_wrapper ul:last-of-type li:last-of-type a').css({
					'background-color': 'white',
					'color': 'black'
				});
			},

			function () {
				mouse_on_menu2 = false;

				$('nav .nav_wrapper ul:last-of-type li:last-of-type a').css({
					'background-color': 'black',
					'color': 'white'
				});

				setTimeout(
					function () {
						if (!mouse_on_a2) {
							$('nav+ul+ul').animate({
									'opacity': '0'
								},
								100,
								function () {
									$('nav+ul+ul').hide();
								}
							);
							menu_opened2 = false;
						}
					}, 60
				);
			}
		);


		/***SLIDER***/
		
		var hover_over_image = false;

		var number_of_image = 0;
		
		$('img.slider').hover(
			function () {
				hover_over_image = true;
			},
			function () {
				hover_over_image = false;
			}
		);

		var images = ["res/slider_0.jpg", "res/slider_1.jpg", "res/slider_2.jpg"]
		var alts = ["Cool image 0", "Cool image 1", "Cool image 2"];
		var signs = ["All in or nothing", "", "Originals instinct"]
		
		var slide = function() {
			
			if(number_of_image <= 1)
				number_of_image++;
			else
				number_of_image = 0;
			
			$('img.slider').after("<img class='slider' src='" + images[number_of_image] + "' alt='" + alts[number_of_image] + "' style='width: 100%' />");
			
			var windowWidth = $(window).width();
			
			$('img.slider:last-of-type').css(
				{ 
					'position': 'absolute',
					'top': $('img.slider').position().top + 'px',
					'left': windowWidth + 'px'
				}
			)
			
			
			$('img.slider:first-of-type').animate(
				{
					left: '-' + windowWidth + 'px'
				},
				{
					duration: 2000,
					queue: false,
					complete: function(){
						$('img.slider:first-of-type').remove();
					}
				}
			);
			
			$('img.slider:last-of-type').animate(
				{
					left: 0
				},
				{
					duration: 2000,
					queue: false
				}
			);
			
		}
		
		
		var time = 7000;

		var tick = function () {
			if (!hover_over_image)
				time -= 100;
			if (time <= 0) {
				slide();
				time = 7000;
			}
		}

		setInterval(tick, 100);
		
	}
);