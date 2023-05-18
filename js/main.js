//mobile
$(document).ready(function(){
    var mobile_keys = new Array('iPhone','iPad','Android','BlackBerry','Windows Phone','Windows CE','LG','MOT','SAMSUNG','SonyEricsson','Nokia');
    
    if(document.URL.match('move_pc_screen')){
        $('.mobile_btn').fadeIn(0);
        mobile_keys = null;
    }
    for(var i in mobile_keys){
        if(navigator.userAgent.match(mobile_keys[i]) != null){ 
            location.href = 'http://mviewticket.dothome.co.kr/';
        }
    }
});

//popup
$(document).ready(function(){
    function setCookie(name, value, expiredays){
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';';
    }
    
    var popup = '.popup';
    var chkbox = '#chk';
    
    $(popup).find('a').click(function(){
        var chk = $(chkbox).prop('checked');
        
        if(chk){
            setCookie('exCookie','done',1); 
        }
        $(popup).stop().fadeOut(0);
        $('html, body').css('overflow','visible');
    });
    
    var cookieData = document.cookie;
    
    if(cookieData.indexOf('exCookie=done') < 0){
        $(popup).fadeIn(0);
        $('html, body').css('overflow','hidden');
    }else{
        $(popup).fadeOut(0);
        $('html, body').css('overflow','visible');
    }
});

//main_slider
$(window).load(function(){
    var swiper = new Swiper('#main_slider .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '#main_slider .swiper-button-next',
            prevEl: '#main_slider .swiper-button-prev',
        },
        pagination: {
            el: '#main_slider .swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            init: function(){
                $('#main_slider .sub_title, #main_slider h4, #main_slider .show_info').addClass('active');
            },
            slideChangeTransitionStart: function(){
                $('#main_slider .sub_title, #main_slider h4, #main_slider .show_info').removeClass('active');  
            },
            slideChangeTransitionEnd: function(){
                $('#main_slider .sub_title, #main_slider h4, #main_slider .show_info').addClass('active');
            }
        }
    });
    
    $('#main_slider .swiper-pagination, #main_slider .swiper-button-next, #main_slider .swiper-button-prev').on('mouseenter',function(e){
        swiper.autoplay.stop();    
    });
    $('#main_slider .swiper-pagination, #main_slider .swiper-button-next, #main_slider .swiper-button-prev').on('mouseleave',function(e){
        swiper.autoplay.start();    
    });
});

//coupon_zone
$(document).ready(function(){
    $(window).scroll(function(){
        var dot = $(window).scrollTop();
        if(dot > 960){
            $('#coupon_zone').css({
                position: 'fixed',
                top: 80
            });
        }else{
            $('#coupon_zone').css({
                position: 'absolute',
                top: 980,
                right: 'calc(50% - 710px)'
            });    
        }
    });
});

//ranking
$(document).ready(function(){
    var tabbar = '#ranking .tab_bar > ul';
    var content = '#ranking .content_wrap';
    
    $(tabbar).find('li:first a').addClass('active');
    $(content).find('div:first').fadeIn(0);
    
    $(tabbar).find('li a').click(function(e){
        e.preventDefault();
        $(tabbar).find('li a').removeClass('active');
        $(this).addClass('active');
        var index = $(this).parent().index();
        $(content).find('div').fadeOut(0);
        $(content).find('div').eq(index).fadeIn(0);
    });
});

//coming_soon
$(document).ready(function(){
    $('#coming_soon circle').removeClass('active');
    $(window).scroll(function(){
        var dot = $(window).scrollTop();
        if(dot >= 1500 && dot <= 2500){
            $('#coming_soon circle').addClass('active');
        }else{
            $('#coming_soon circle').removeClass('active'); 
        }
    });
});

//video_bn
$(document).ready(function(){
    var btn = '#video_bn button';
    var video = '#video_bn iframe';
    
    function autoPlayVideo(vcode, width, height){
        "use strict";
        $(".video_container").html('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?mute=1&autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
    }
    
    $(btn).click(function(){
        $('#video_bn .video_sumnail').fadeOut('fast');
        autoPlayVideo('C761c9E9ztc','612','350');
    });
});

//concert_classic, musical_play, exhibition_kids
$(window).load(function(){
    var swiper = new Swiper('#concert_classic .swiper-container, #musical_play .swiper-container, #exhibition_kids .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 50,
        breakpoints: {
            1820: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
            1420: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
            520: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });
});

//story
$(window).load(function(){
    var swiper = new Swiper('#story .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '#story .swiper-button-next',
            prevEl: '#story .swiper-button-prev',
        },
    });
    
});

//review
$(window).load(function(){
    var swiper = new Swiper('#review .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 100,
        loop: true,
        navigation: {
            nextEl: '#review .swiper-button-next',
            prevEl: '#review .swiper-button-prev',
        },
        centeredSlides: true,
    });
});

//notice
$(window).load(function(){
    var swiper = new Swiper('#notice .swiper-container', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        direction: 'vertical'
    });
    $('#notice .swiper-container').on('mouseenter',function(e){
        swiper.autoplay.stop();    
    });
    $('#notice .swiper-container').on('mouseleave',function(e){
        swiper.autoplay.start();    
    });
});