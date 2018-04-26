
 $(document).ready(function () {


	
	/* show / hide notes box */
	
	$('.toggle-my-notes').click(function() {
		$('.my-notes').toggle();
		$('.overlay').toggle();
	    $('.add-message #save').attr('disabled');
	});

	$('.overlay').click(function() {
		$('.customer-notes').toggle();
		$('.overlay').toggle();
	});

	var text_max = 500;

    $('.calc').keyup(function() {
        var text_length = $(this).val().length;
        var text_remaining = text_max - text_length;
                
        if ((text_length <= 500) && (text_length > 0)) {
	        $('#save').removeAttr('disabled');
	        $(this).next().removeClass('is-error');
        	$(this).next().text(text_remaining + ' characters remaining'); 
        }
        if ((text_length > 500) || (text_length == 0)) {
	        $('#save').attr('disabled');
	        $(this).next().addClass('is-error');
        }
        if (text_length > 500) {
        	$(this).next().text(0 - text_remaining + ' characters too many'); 
        }
        if (text_length == 0) {
        	$(this).next().text('Please enter some text'); 
        }
        
        if (($(this).val().length < 500) && ($(this).val().length > 0)) {
	        $('#save').removeAttr('disabled');
        }
        if ($(this).val().length > 500)  {
	        $('#save').attr('disabled');
        }
    });
    
 $('.calc').mouseenter(function() {
        var text_length = $(this).val().length;
        var text_remaining = text_max - text_length;
             
        if ((text_length < 500) && (text_length > 0))
        {
	        $('#save').removeAttr('disabled');
	        $(this).next().removeClass('error');
        	$(this).next().text(text_remaining + ' characters remaining'); 
        }
        if ((text_length > 500) || (text_length == 0))
        {
	        $('#save').attr('disabled','true');
	        $(this).next().addClass('is-error');
        }
        if (text_length > 500)
        {
        	$(this).next().text(0 - text_remaining + ' characters too many'); 
        }
        if (text_length == 0)
        {
        	$(this).next().text('Please enter some text'); 
        }
    });
    
 $('.calc').mouseleave(function() {
        var text_length = $(this).val().length;
        var text_remaining = text_max - text_length;
             
        if ((text_length < 500) && (text_length > 0)) {
	        $('#save').removeAttr('disabled');
	        $(this).next().removeClass('error');
        	$(this).next().text(text_remaining + ' characters remaining'); 
        }
        if ((text_length > 500) || (text_length == 0)) {
	        $('#save').attr('disabled','true');
	        $(this).next().addClass('is-error');
        }
        if (text_length > 500) {
        	$(this).next().text(0 - text_remaining + ' characters too many'); 
        }
        if (text_length == 0) {
        	$(this).next().text('Please enter some text'); 
        }
    });

});
