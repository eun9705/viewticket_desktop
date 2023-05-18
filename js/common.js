//header_scroll
$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top > 0){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });
});

//site_map,login
$(document).ready(function(){
    $('.site_map').colorbox({
        iframe: true,
        width: 1060,
        height: 660,
        scrolling: false
    });
    $('.login_open').colorbox({
        iframe: true,
        width: 545,
        height: 645,
        scrolling: false    
    });
});

//language
$(document).ready(function(){
    $('.language').click(function(){
        alert('The English version will be available soon');
    })
});

//gnb
$(document).ready(function(){
    var subBg = $('<div class="sub_nav_bg"></div>');
    $('header').append(subBg);
    var main = '.main_nav';
    var sub = '.sub_nav';
    var speed = 'fast';
    var bg= '.sub_nav_bg';
    
    $(main).mouseenter(function(){
        $(sub + ', '+ bg).stop().slideUp(speed);
        $(this).next().stop().slideDown(speed);
        $(bg).stop().slideDown(speed);
        $(this).parent().mouseleave(function(){
            $(this).find(sub).stop().slideUp(speed);
            $(bg).stop().slideUp(speed);
        });
    });
    
    $(main).focus(function(){
        $(this).next().stop().slideDown(speed);
        $(bg).stop().slideDown(speed);
    });

    $(main).keydown(function(e){
        if(e.keyCode == 9){
            if(e.shiftKey){
                $(this).next().stop().slideUp(speed);
                $(bg).stop().slideUp(speed);
            }
        }
    });

    $(sub).find('li:last a').keydown(function(e){
        if(e.keyCode == 9){
            if(!e.shiftKey){
                $(this).parents(sub).stop().slideUp(speed);
                $(bg).stop().slideUp(speed);
            }
        }
    });
});

//top_btn
$(document).ready(function(){
    var btn = '.top_btn a';
    var speed = 1200;
    var easing = 'easeOutQuart';
    var minWidth = 1180;
    var btnWidth = $(btn).width();
    var w = minWidth + (2 * btnWidth) + 20;
    
    $(window).scroll(function(){
    
        var top = $(window).scrollTop();
        var wWidth = $(window).width();
        
        if(top < 500 || wWidth < w){
            $(btn).parent().fadeOut(400);
        }else{
            $(btn).parent().fadeIn(400);
        }
    });
    
    $(window).resize(function(){
       $(window).trigger('scroll');
    });
    
    $(btn).click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 0
        },speed,easing);
    });
});