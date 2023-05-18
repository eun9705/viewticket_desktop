$(document).ready(function(){
    $.ajax({
        url: "/js/kids.json",
        dataType: "json",
        success: function(data){
            var use_date = data.kids_play;
            
            function data_print(){
                if(use_date.length > 0){
                    console.log(use_date.length);
                    $('#sub_contents .wrap').append('<p class="count">현재 예매 가능한 공연은 총 <span class="highlight">' + String(use_date.length) + '개</span> 입니다</p>');
                    var ul = $('<ul class="list"/>');
                    for(var i in use_date){
                        var li = $('<li />');
                        var $name = use_date[i].name;
                        var $place = use_date[i].place;
                        var $date = use_date[i].date;
                        var $image = use_date[i].image;
                        
                        li.append(
                            $('<a href="#empty" />').append(
                                $('<img />').attr({
                                    src: $image,
                                    onerror: 'javascript:this.src="../images/error_icon.png"'
                                }),
                                $('<h4 />').text($name),
                                $('<p class="place" />').text($place),
                                $('<p class="date" />').text($date)
                            )
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