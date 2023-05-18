$(document).ready(function(){
    $('#chk').change(function(){
	if($(this).is(':checked')){
		$('.login_box label').css('color', '#f19c49');
	}
    else{
		$('.login_box label').css('color', '#666');
	}
    });
});