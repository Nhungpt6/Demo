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

        /*screen gameplay*/
        $('.btnmoqua').click( function () {
            $('.buoc2').show();
            $('.buoc1').hide();
        });

        $('.btntruot').click( function () {
            $('.buoc5').show();
            $('.buoc1').hide();
        });

        $('.btngame').click( function () {
            $('.buoc1').show();
            $('.buoc2,.buoc3,.buoc4,.buoc5').hide();
        })


    });
})(window.jQuery);