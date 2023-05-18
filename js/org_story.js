$(document).ready(function(){
    $.ajax({
        url: "/js/story.json",
        dataType: "json",
        success: function(data){
            var use_date = data.story;
            
            function data_print(){
                if(use_date.length > 0){
                    var ul = $('<ul class="story"/>');
                    for(var i in use_date){
                        var li = $('<li />');
                        var $name = use_date[i].name;
                        var $image = use_date[i].image;
                        
                        li.append(
                            $('<a href="#empty" />').append(
                                $('<img />').attr({
                                    src: $image,
                                    alt: $name,
                                    onerror: 'javascript:this.src="../images/error_icon.png"'
                                }),
                                $('<h4 />').html($name)
                            )
                        );
                        $(ul).append(li);
                    }
                    $('#sub_contents .wrap').append(ul);
                }else{
                    $('#sub_contents .wrap').after('<p class="no_img">공연단체가 없습니다.</p>'); 
                } 
            }
            data_print();
        },
        error: function(data){
            $('#sub_contents .wrap').after('<p class="error_img">데이터를 불러오지 못했습니다. 관리자에게 문의하세요</p>');  
        }
    });
});