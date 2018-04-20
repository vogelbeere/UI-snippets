

 $(document).ready(function () 
{
	$('.show-confirm').click(function()
	{
		$('.confirmation-message').show();
		$('.overlay').show();
	});
	
	$('.conf-msg-cancel-button').click(function()
	{
		$('.confirmation-message').hide();
		$('.overlay').hide();
	});
});