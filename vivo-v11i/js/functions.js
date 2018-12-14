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
                $('.mi-menu').addClass('mi-mnfix');
            } else {
                $('.mi-menu').removeClass('mi-mnfix');
            }
        });

        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        });

        $('.vv-ul').countdown('2018/09/17 00:00', function(event) {
            $(this).html(event.strftime('<li><p class="vv-p1">%D</p><p class="vv-p2">Ngày</p></li><li><p class="vv-p1">%H</p><p class="vv-p2">Giờ</p> </li><li> <p class="vv-p1">%M</p> <p class="vv-p2">Phút</p> </li><li> <p class="vv-p1">%S</p> <p class="vv-p2">Giây</p> </li>'));
        });

	});
})(window.jQuery);