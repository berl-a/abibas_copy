$(document).ready(
	function() {
		$('input').focus(
			function() {
				$(this).removeAttr('placeholder');
			}
		);
		
		/*** PLACING MENUs ***/
		
		var pos_of_a = $('nav .nav_wrapper ul:first-of-type li:last-of-type a').position();
		var height_of_a = $('nav .nav_wrapper ul:first-of-type li:last-of-type a').outerHeight();
		
		$('nav+ul').css(
			{
				'left': pos_of_a.left + 'px',
				'top': pos_of_a.top + height_of_a + 1 + 'px'
			}
		);
		
		pos_of_a = $('nav .nav_wrapper ul:last-of-type li:last-of-type a').position();
		height_of_a = $('nav .nav_wrapper ul:last-of-type li:last-of-type a').outerHeight();
		
		$('nav+ul+ul').css(
			{
				'left': pos_of_a.left + 'px',
				'top': pos_of_a.top + height_of_a + 1 + 'px'
			}
		);
		
		/*** MENU 1 ***/
		
		var mouse_on_menu1 = false;
		var mouse_on_a1 = false;
		
		var menu_opened1 = false;
		
		$('nav .nav_wrapper ul:first-of-type li:last-of-type a').hover(
			function() {
				
				$(this).css({
					'background-color': 'white',
					'color': 'black'
				});
				
				mouse_on_a1 = true;
				
				if(!menu_opened1){
					$('nav+ul').show();	
					$('nav+ul').animate(
						{'opacity': '1'},
							100
						);
					menu_opened1 = true;
				}
					
			},
			
			function() {
				mouse_on_a1 = false;
				
				setTimeout(
					function(){
						if(!mouse_on_menu1){
							
							$('nav .nav_wrapper ul:first-of-type li:last-of-type a').css({
								'background-color': 'black',
								'color': 'white'
							});
							
							$('nav+ul').animate(
								{'opacity': '0'},
								100,
								function(){
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
			function() {
				mouse_on_menu1 = true;
				
				$('nav .nav_wrapper ul:first-of-type li:last-of-type a').css(
					{
						'background-color': 'white',
						'color': 'black'
					}
				);
			},
			
			function() {
				mouse_on_menu1 = false;
				
				$('nav .nav_wrapper ul:first-of-type li:last-of-type a').css(
					{
						'background-color': 'black',
						'color': 'white'
					}
				);
				
				setTimeout(
					function(){
						if(!mouse_on_a1){
							$('nav+ul').animate(
								{'opacity': '0'},
								100,
								function(){
									$('nav+ul').hide();			 
								}
							);
							menu_opened1 = false;
						}
					}, 20
				);
			}
		);
		
		/*** MENU 2 ***/
		
		var mouse_on_menu2 = false;
		var mouse_on_a2 = false;
		
		var menu_opened2 = false;
		
		
		$('nav .nav_wrapper ul:last-of-type li:last-of-type a').hover(
			function() {
				mouse_on_a2 = true;
				
				if(!menu_opened2){
					$('nav+ul+ul').show();	
					$('nav+ul+ul').animate(
						{'opacity': '1'},
							100
						);
					menu_opened2 = true;
				}
					
			},
			
			function() {
				mouse_on_a2 = false;
				
				setTimeout(
					function(){
						if(!mouse_on_menu2){
							$('nav+ul+ul').animate(
								{'opacity': '0'},
								100,
								function(){
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
			function() {
				mouse_on_menu2 = true;
			},
			
			function() {
				mouse_on_menu2 = false;
				
				setTimeout(
					function(){
						if(!mouse_on_a2){
							$('nav+ul+ul').animate(
								{'opacity': '0'},
								100,
								function(){
									$('nav+ul+ul').hide();			 
								}
							);
							menu_opened2 = false;
						}
					}, 20
				);
			}
		);
		
		
		
		
	}
);