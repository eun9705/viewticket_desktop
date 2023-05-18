//birth
$(document).ready(function(){
    var today = new Date();
    var year = today.getFullYear();
    
    var year_select = '#birth_year';
    var month_select = '#birth_month';
    var day_select = '#birth_day';
    
    var year_option = '';
    var month_option = '';
    
    for(var i=year;i>=1900;i--){
        year_option += '<option value=' + i + '>' + i + '</option>';
    }   
    for(var j=1;j<=12;j++){
        month_option += '<option value=' + j + '>' + j + '</option>';
    }
    $(year_select).html(year_option);
    $(month_select).html(month_option);
    
    var date = [31,28,31,30,31,30,31,31,30,31,30,31];
    
    $(month_select).change(function(){
        var leap = $(year_select).find('option:selected').val();
        if((leap % 4 == 0 && leap % 100 != 0) || leap % 400 == 0 ){
            date[1] = 29;
        }else{
            date[1] = 28;
        }
        var index = $(this).find('option:selected').index();
        var day_option = '';
        for(var i=1; i<=date[index]; i++){
            day_option += '<option>' + i + '</option>';
        }
        $(day_select).html(day_option);
    });
    
    $(year_select).change(function(){
        $(month_select).trigger('change');
    });
    $(month_select).trigger('change');
});


//phone
$(document).ready(function(){
    $('#phone_box02, #phone_box03').on("keyup", function() {
      $(this).val($(this).val().replace(/[^0-9]/g,""));
    });
    $('#phone_box02').keyup(function(){
        if(this.value.length == this.maxLength){
            $('#phone_box03').focus();
        }    
    });
});

//email
$(document).ready(function(){
    var email_select = '<select id="email_box03">';
    var email_address = new Array("naver.com","google.com","hanmail.net");
    for(var i in email_address){
        email_select += "<option value='" + email_address[i] + "'>" + email_address[i] + "</option>";
    }
    email_select += '</select>';
    $('.join_email label.last').after(email_select);
    
    $('#email_box03').on('change',function(){
        var select = $(this).find('option:selected').val();
        $('#email_box02').val(select);
    });
});

//약관 전체 동의
$(document).ready(function(){
    var all = '#all_check';
    var check01 = '#check01';
    var check02 = '#check02';
    var check03 = '#check03';
    var check04 = '#check04';
    var check05 = '#check05';

    $(all).change(function(){
        var all_check = $(this).prop('checked');

        if(all_check){
            $('dt input').prop('checked',true);
        }else{
            $('dt input').prop('checked',false);
        }
    });

    $('dt input').change(function(){
        var chk01 = $(check01).prop('checked');
        var chk02 = $(check02).prop('checked');
        var chk03 = $(check03).prop('checked');
        var chk04 = $(check04).prop('checked');
        var chk05 = $(check05).prop('checked');

        if(chk01 && chk02 && chk03 && chk04 && chk05){
            $(all).prop('checked',true);
        }else{
            $(all).prop('checked',false);
        }
    });
});

//agree_area - 내용 자세히보기
$(document).ready(function(){
    var btn = ".agree_area .more_btn";
    var dd = '.agree_area dd'; //내용
    var dt = '.agree_area dt';
    $(btn).click(function(){
        var is = $(this).parent().next().is(':hidden');

        if(is){ 
            $(dd).stop().slideUp(200);
            $(this).parent().next().stop().slideDown(200);
        }else{ 
            $(this).parent().next().stop().slideUp(200);
        }    
    });
});