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
                var posi = $(link).offset().top - 40;
                $('body,html').animate({scrollTop:posi},1000);
            }
        });

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 500) {
                $('.nk6-menu').addClass('nk6-mnfix');
            } else {
                $('.nk6-menu').removeClass('nk6-mnfix');
            }
        });

	});
})(window.jQuery);