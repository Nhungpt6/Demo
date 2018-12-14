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
                $('.nk5-menu').addClass('nk5-mnfix');
            } else {
                $('.nk5-menu').removeClass('nk5-mnfix');
            }
        });

        var select='.ss-s1color ul li';
        $(select).on('click', function(){
            $(select).removeClass('active');
            $(this).addClass('active');
        });

	});
})(window.jQuery);