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

		//landing

        // $('.aw-ul').countdown('2018/09/13 00:00', function(event) {
        //     $(this).html(event.strftime('<li><p class="aw-p1">%D</p><p class="aw-p2">Ngày</p></li><li><p class="aw-p1">%H</p><p class="aw-p2">Giờ</p> </li><li> <p class="aw-p1">%M</p> <p class="aw-p2">Phút</p> </li><li> <p class="aw-p1">%S</p> <p class="aw-p2">Giây</p> </li>'));
        // });

		if ($(".of9-s2wrap").length > 0) {
            slickNews.init();
        }

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
                $('.mi-menu').addClass('mi-mnfix');
            } else {
                $('.mi-menu').removeClass('mi-mnfix');
            }
        });
		
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
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