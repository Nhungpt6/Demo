(function($){
	var slickNews = {
        init: function () {
            slickNews.events();
        },
        events: function () {
            $('.of9-s2wrap').countdown('2018/08/15 00:00', function(event) {
                $(this).html(event.strftime('<span class="glyphicon glyphicon-time of9-s2icon"></span> <span class="of9-s2tit">Oppo F9 sẽ ra mắt sau</span> <i></i> <span class="of9-s2time of9-s2tm1">%D</span> <span class="of9-s2tit">ngày</span> <span class="of9-s2time of9-s2tm2">%H:%M:%S</span>'));

            });
        }
    };
	
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
            if ($(window).scrollTop() > 70) {
                $('.of9-menu').addClass('of9-mnfix');
            } else {
                $('.of9-menu').removeClass('of9-mnfix');
            }
        });
		
        var swiper = new Swiper('.swiper-s7', {
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

        $(document).on('click','.of9-s4ldo',function () {
            $('.of9-s4mau').hide();
            $('.of9-s4do').show();
        });
        $(document).on('click','.of9-s4lxanh',function () {
            $('.of9-s4mau').hide();
            $('.of9-s4xanh').show();
        });

        /*09082018*/
        $(document).on('click','.of9-vd2 span',function (ev) {
            $(".of9-vdplay").slideDown();
            $(".of9-video").slideUp();
            $(".of9-vdplay iframe")[0].src += "&autoplay=1";
            ev.preventDefault();
        });






        // 10082018
        var swiper12 = new Swiper('.swiper-s91', {
            effect: 'coverflow',
            grabCursor: true,
            loop: true,
            loopFillGroupWithBlank: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true,
            },
            navigation: {
                nextEl: '.swiper-s91 .swiper-button-next',
                prevEl: '.swiper-s91 .swiper-button-prev',
            }
        });
        var swiper13 = new Swiper('.swiper-s92', {
            effect: 'coverflow',
            grabCursor: true,
            loop: true,
            loopFillGroupWithBlank: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true,
            },
            navigation: {
                nextEl: '.swiper-s92 .swiper-button-next',
                prevEl: '.swiper-s92 .swiper-button-prev',
            }
        });

        $(document).on('click','#of9-s9btnd',function () {
            $('.of9-s9ul li').removeClass("active");
            $(this).parent().addClass('active');
            $('.of9-s9slide').hide();
            $('.of9-s9do').show();
            swiper12.update();
        });
        $(document).on('click','#of9-s9btnx',function () {
            $('.of9-s9ul li').removeClass("active");
            $(this).parent().addClass('active');
            $('.of9-s9slide').hide();
            $('.of9-s9xanh').show();
            swiper13.update();
        });


    });
})(window.jQuery);