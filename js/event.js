$(document).ready(function(){
    
    var btn = '.event .btn';
    var content = '.event .content';
    $(btn).find('li:first a').addClass('active');
    $(content).find('>div:first').fadeIn(0);
    
    $.ajax({
        url: "/js/event.json",
        dataType: "json",
        success: function(data){ 
            var data01 = data.current;
            var data02 = data.end;
            
            var dataArray = [data01, data02];
            
            function dataPrint(index){
                if(dataArray[index].length > 0){
                    var ul = $('<ul class="list" />'); 
                    for(var i in dataArray[index]){
                        var li = $('<li />');
                        
                        var $category = dataArray[index][i].category;
                        var $name = dataArray[index][i].name;
                        var $period = dataArray[index][i].period;
                        var $announcement = dataArray[index][i].announcement;
                        var $images = dataArray[index][i].images;
                        var $end = dataArray[index][i].end;
                        var d_day = new Date($end);
                        var today = new Date();
                        var distance = d_day.getTime() - today.getTime();
                        var text = '';
                        var d = Math.floor(distance / (1000 * 60 * 60 * 24));
                        if (distance<0) {
                            text = "종료";
                        }else {
                            if (d>0) {
                                text = d + "일 남음";    
                            }
                        }
                        
                        
                        li.append(
                            $('<a href="empty" />').append(
                                $('<img />').attr({
                                    src: $images,
                                    alt: $name,
                                    onerror: 'javascript:this.src="../images/error_icon.png"'
                                }),
                                $('<div class="text_box" />').append(
                                    $('<p class="event_category" />').text($category),
                                    $('<h4 />').text($name),
                                    $('<p class="date">' + $period + '<span class="win">' + $announcement + ' 발표</span></p>'),
                                    $('<p class="d_day" />').text(text)
                                )
                            )
                        );
                        
                        ul.append(li);
                        
                    }
                    $('.event .content > div').append(ul);
                }
            }
            
            dataPrint(0);
            
            $(btn).find('a').click(function(e){
                e.preventDefault();

                $(btn).find('a').removeClass('active');
                $(this).addClass('active');

                var index = $(this).parent().index();

                $(content).find('> div').stop().fadeOut(0);
                $(content).find('> div').eq(index).stop().fadeIn(0);
                
                $('.event .list').remove();
                dataPrint(index);
            });
        },
        error: function(data){
            $('#sub_contents .wrap').after('<p class="error_img">데이터를 불러오지 못했습니다. 관리자에게 문의하세요</p>');  
        }
    });
});