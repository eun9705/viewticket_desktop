$(document).ready(function(){
    var btn = '.contents_bottom dl a';
    $(btn).click(function(){
        $(this).parent().siblings().fadeToggle(0);
    });
});