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


        /*08102018*/
        $('#xsvdmd').on('show.bs.modal', function () {
            $('.ac-video-media-controller')[0].play();
        }).on('hide.bs.modal', function () {
            $('.ac-video-media-controller')[0].pause();
        });

	});
})(window.jQuery);