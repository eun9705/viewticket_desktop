$(document).ready(function(){
    $.ajax({
        url: "/js/sport.json",
        dataType: "json",
        success: function(data){
            var use_date = data.baseball;
            
            function data_print(){
                if(use_date.length > 0){
                    var ul = $('<ul class="sport"/>');
                    for(var i in use_date){
                        var li = $('<li />');
                        var $name = use_date[i].name;
                        var $home = use_date[i].home;
                        var $eng_name = use_date[i].eng_name;
                        var $image = use_date[i].image;
                        
                        li.append(
                            $('<img />').attr({
                                src: $image,
                                alt: $name + ' 엠블럼',
                                onerror: 'javascript:this.src="../images/error_icon.png"'
                            }),
                            $('<h4 />').text($name),
                            $('<p class="home" />').text($home),
                            $('<p class="eng_name" />').text($eng_name),
                            $('<a href="#empty" class="sport_btn" />').text("예매하기")
                        );
                        $(ul).append(li);
                    }
                    $('#sub_contents .wrap').append(ul);
                }else{
                    $('#sub_contents .wrap').after('<p class="no_img">현재 예매 가능한 공연이 없습니다.</p>'); 
                } 
            }
            data_print();
        },
        error: function(data){
            $('#sub_contents .wrap').after('<p class="error_img">데이터를 불러오지 못했습니다. 관리자에게 문의하세요</p>');  
        }
    });
});