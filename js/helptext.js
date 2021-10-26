

 $(document).ready(function () 
{	
	$('input.help').focus(function()
	{
		$(this).parent().next().find('.helptext').show();
	});

	$('input.help').blur(function()
	{
		$(this).parent().next().find('.helptext').hide();
	});
	
	$('select.help').focus(function()
	{
		$(this).parent().next().find('.helptext').show();
	});

	$('select.help').blur(function()
	{
		$(this).parent().next().find('.helptext').hide();
	});
	
	$('textarea.help').focus(function()
	{
		$(this).parent().next().find('.helptext').show();
	});

	$('textarea.help').blur(function()
	{
		$(this).parent().next().find('.helptext').hide();
	});
});