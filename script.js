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
            } else
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

        var number_of_image = 0;

        var isPaused = false;

        var images = ["res/slider_0_crop.jpg", "res/slider_1_crop.jpg", "res/slider_2_crop.jpg"];
        var alts = ["Cool image 0", "Cool image 1", "Cool image 2"];

        var slide = function (time, image) {

            if (image === 'next') {
                if (number_of_image <= 1)
                    number_of_image++;
                else
                    number_of_image = 0;
            } else {
                number_of_image = parseInt(image);
            }

            $("div.links_under_slider div.links_wrapper div.slider_controls img:not(div.links_under_slider div.links_wrapper img:first-of-type)").each(
                function(){
                    $(this).attr('src', "res/slider_control.png");
                }
            );

            $("div.links_under_slider div.links_wrapper img").each(
                function(){
                    if($(this).attr('id') == number_of_image){
                        $(this).fadeTo(
                            time / 2,
                            0.5,
                            function() {
                                $(this).attr('src', "res/slider_control_chosen.png");
                                $(this).fadeTo(time / 2, 1);
                            }
                        );
                    }
                }
            );

            $('img.slider').fadeTo(
                time / 2,
                0.1,
                function() {
                    $('img.slider').attr('src', images[number_of_image]);
                    $('img.slider').attr('alt', alts[number_of_image]);
                    $('img.slider').fadeTo(time / 2, 1);
                }
            );
        };


        var time = 10000;

        var tick = function () {

            if (!isPaused)
                time -= 100;

            if (time <= 0) {
                slide(200, 'next');
                time = 10000;
            }
        };

        setInterval(tick, 100);

        $("div.links_under_slider div.links_wrapper div.slider_controls img").click(
            function () {

                var id = $(this).attr('id');
                var $this_button = $(this);

                if (id === 'pause') {
                    isPaused = true;
                    $this_button.attr('id', 'play');
                    $this_button.attr('src', 'res/play.png');
                } else if (id === 'play') {
                    isPaused = false;
                    $this_button.attr('id', 'pause');
                    $this_button.attr('src', 'res/pause.png');
                } else
                    slide(200, parseInt(id));
            }
        );

        $('.links a:last-of-type').click(
            function(){
                $('html, body').animate(
                    {
                        scrollTop: $('.links a:nth-of-type(3)').offset().top + $('.links a:nth-of-type(3)').height() + 10
                    }, 500
                );
            }
        );

        /***COMMODITY***/

        $('commodity div').each(
            function(){
                var $this_div = $(this);
                var x = $this_div.position().left;
                var y = $this_div.position().top;
                $this_div.child('img').attr('left', "'" + x + "'");
                $this_div.child('img').attr('top', "'" + y + "'");
            }
        );

        $('.commodity').hover(
            function(){

                var this_div = $(this).children('div');

                var $this_a = this_div.find('a.hiding');

                $this_a.animate(
                    {
                        'top': '-=7%',
                        'opacity': '1'
                    },
                    {
                        duration: 350
                    }
                );

                var this_img = this_div.children('img');
                this_img.removeClass('normal');
                this_img.addClass('darken');

            },
            function(){

                var this_div = $(this).children('div');

                var $this_a = this_div.find('a.hiding');

                $this_a.animate(
                    {
                        'opacity': '0',
                        'top': '+=7%'
                    },
                    {
                        queue: true,
                        duration: 100
                    }
                );

                var this_img = this_div.children('img');
                this_img.removeClass('darken');
                this_img.addClass('normal');
            }
        );


    }
);
