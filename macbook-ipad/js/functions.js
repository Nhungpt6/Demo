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

        if (wwin.width() < 992) {
            $(".mc-s22").removeClass("active");
        }else {
            $(".mc-s22").addClass("active");
        }
	});

    var wwin = $(window);
    $(window).on('resize', function(){

        if (wwin.width() < 992) {
            $(".mc-s22").removeClass("active");
        }else {
            $(".mc-s21,.mc-s22").addClass("active");
        }
    });

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 70) {
            $('.mc-menu').addClass('mc-mnfix');
        } else {
            $('.mc-menu').removeClass('mc-mnfix');
        }
    });
    $(document).on('click','[toscroll]',function(e){
        e.preventDefault();
        var link = $(this).attr('toscroll');
        if($(link).length > 0){
            var posi = $(link).offset().top - 50;
            $('body,html').animate({scrollTop:posi},1000);
        }
    });

//    19112018
    $(document).on('click','.of9-vd2 span',function (ev) {
        $(".of9-vdplay").slideDown();
        $(".mc-videoyt").slideUp();
        $(".of9-vdplay iframe")[0].src += "&autoplay=1";
        ev.preventDefault();
    });

    $(document).on('click','.of9-vd22 span',function (ev) {
        $(".of9-vdplay2").slideDown();
        $(".mc-videoyt2").slideUp();
        $(".of9-vdplay2 iframe")[0].src += "&autoplay=1";
        ev.preventDefault();
    });

    $(document).on('click', '.configs1', function () {
        // $('input[name=chMau]').attr('checked',false);
        var ele = document.getElementsByName("chMau");
        for(var i=0;i<ele.length;i++)
            ele[i].checked = false;
    })

})(window.jQuery);