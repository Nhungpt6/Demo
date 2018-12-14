(function($){
	$(document).ready(function (){

		$('.of-iconmntop').click(function(){
			$('.of-menutop').toggleClass('of-mnshow');
		});

		$('.of-search').click(function(){
			$('.of-searchbox').show(200);
		});

		$('.of-closesearch').click(function(){
			$('.of-searchbox').hide(200);
		});

        $(document).on('click','[toscroll]',function(e){
            e.preventDefault();
            var link = $(this).attr('toscroll');
            if($(link).length > 0){
                var posi = $(link).offset().top - 50;
                $('body,html').animate({scrollTop:posi},1000);
            }
        });

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 500) {
                $('.y9-menu').addClass('y9-mnfix');
            } else {
                $('.y9-menu').removeClass('y9-mnfix');
            }
        });

        var swiper1 = new Swiper('.y9-s7 .swiper-container', {
            pagination: {
                el: '.y9-s7 .swiper-container .swiper-pagination',
            },
        });

        var swiper2 = new Swiper('.swiper-s8', {
            slidesPerView: 4,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-s8 .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                374: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                }
            }
        });


	});
})(window.jQuery);