
 $(document).ready(function () {	
	$('.level1 > a').hover(function()	{
	if ($(this).attr('class') != 'is-active')		{
			$('.level1 a').removeClass('is-active');
			$(this).addClass('is-active');
		}
	});
	
	$('.megamenu').hover(function()	{
		$('.level1 a').removeClass('is-active');
	});	
	
	$('input.long').focus(function()	{
		$(this).parent().next().find('.helptext').show();
	});

	$('input.long').blur(function()	{
		$(this).parent().next().find('.helptext').hide();
	});

});

