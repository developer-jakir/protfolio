(function($){


        $(document).ready(function(){
            //this code in aos.js exam to all section animation
            AOS.init({
                offset: 300,
                duration: 1000,
            });

            //this code in isotope
            // init Isotope
            var $grid = $('.all-potfolio').isotope({
            // options
            });
            // filter items on button click
            $('.potfolio-menu').on( 'click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            });
            
            // this code slick slider
            $('.all-team').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            arrows: true,
            nextArrow: '.next',
            prevArrow:'.pev',
            autoplay: true,
            });



            // scrolls Effects in menu to section
            $(function () {
                // Get clickable link
                $("nav li a").click(function (event) {
                    if (this.hash !== "") {
                    event.preventDefault();

                    // Store link's hash value into variable
                    const hash = this.hash;
                    // console.log(hash)

                    // Animate html & body to the hash value position
                    $("html, body").animate(
                        {
                        scrollTop: $(hash).offset().top // - 100 if you wish
                        },
                        800
                    );
                    }
                });
            });


            // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
                window.onscroll = function() {scrollFunction()};

                function scrollFunction() {
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    document.getElementById("hs-top").style.padding = "0px 10px";
                } else {
                    document.getElementById("hs-top").style.padding = "30px 20px";
                }
                }


                //counter section code here

                $.fn.jQuerySimpleCounter = function( options ) {
            var settings = $.extend({
                start:  0,
                end:    100,
                easing: 'swing',
                duration: 400,
                complete: ''
            }, options );

            var thisElement = $(this);

            $({count: settings.start}).animate({count: settings.end}, {
                duration: settings.duration,
                easing: settings.easing,
                step: function() {
                    var mathCount = Math.ceil(this.count);
                    thisElement.text(mathCount);
                },
                complete: settings.complete
                });
            };

            $('#number1').jQuerySimpleCounter({end: 44,duration: 3000});
            $('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
            $('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
            $('#number4').jQuerySimpleCounter({end: 246,duration: 2500});


            $("#mobile-menu").click(function() {
                $("#main-menu").toggleClass('block').animate(1000)
                return false;
                });





              // typing animation
              typing_effect(['Web Designer', 'Web Developer','wp customaziton', 'wp theme-development', 'WordPrss Expert'], ['#fd4e50']);

              function typing_effect(words, colors) {
        
              var cursor = document.getElementById('cursor'); //cursor
              var text = document.getElementById('text') //text
        
              var blink = true;
              var wait = false;
              var letters_count = 1;
              var temp = 1;
        
              window.setInterval(function () { //wait between words when it starts writting
                if (letters_count === 0 && wait === false) {
                  wait = true;
        
                  text.innerHTML = '' // leave a blank
                  window.setTimeout(function () {
                    var usedWord = words.splice(0, 1)[0]
                    words.push(usedWord);
                    temp = 1;
                    text.style.color = colors[0]
                    letters_count += temp;
                    wait = false;
                  }, 1000)
                } else if (letters_count === words[0].length + 1 && wait === false) {
                  wait = true;
                  window.setTimeout(function () { //wait a bit until words finished and start deleting
                    temp = -1;
                    letters_count += temp;
                    wait = false;
                  }, 1000)
                } else if (wait === false) { //write words                    
                  text.innerHTML = words[0].substr(0, letters_count)
                  letters_count += temp;
                }
              }, 50)
              window.setInterval(function () {
                if (blink) {
                  cursor.style.opacity = "0";
                  blink = false;
                } else {
                  cursor.style.opacity = "1";
                  blink = true;
                }
              }, 400)
            }






          




        });


})(jQuery);