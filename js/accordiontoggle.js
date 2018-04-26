
 $(document).ready(function () 
{	
	$('.is-closed').click(function()
	{
		$(this).next().slideToggle(); 
		$(this).toggleClass('is-closed is-open');
	});

	$('.is-open').click(function()
	{
		$(this).next().slideToggle(); 
		$(this).toggleClass('is-open is-closed'); 
	});
	
	$('.expand').click(function()
	{
		$('.sectioncontent').slideDown();
		$('.required').addClass('required-flag');
		$('.title').removeClass('is-closed');
		$('.title').addClass('is-open');
	});

	$('.collapse').click(function()
	{
		$('.sectioncontent').slideUp();
		$('.required').removeClass('required-flag');
		$('.title').removeClass('is-open');
		$('.title').addClass('is-closed');
	});	
	
	$('.show-optional').click(function()
	{
	  if ( $('.optional').css('visibility') == 'hidden' )
		$('.optional').css('visibility','visible');
	  else
		$('.optional').css('visibility','hidden');
	});

/* tabbed section */

	$('ul.tabs li').click(function()
	{
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	
	
/* display tooltip on hover state */
	
	$('.tool').hover(function()
	{
		$(this).next().toggle();
	});
	
/* turn tooltips on */	
	
	$('.showtt').click(function()
	{
		$('.tooltip-balloon').removeClass('tooltip-off');
		$(this).hide();
		$('.hidett').show();
	});	
	
/* turn tooltips off */	
	
	$('.hidett').click(function()
	{
		$('.tooltip-balloon').addClass('tooltip-off');
		$(this).hide();
		$('.showtt').show();
	});	



	/* select all checkboxes */
	

	$('.checkall').change(function() 	{
	    var checkboxes = $('.category input');
	    if($(this).is(':checked')) 	    {
	        checkboxes.prop('checked', true);
	    } else {
	        checkboxes.prop('checked', false);
	    }
	});
    
    
    $('.checknext').change(function() {
		var checkboxes = $(this).nextAll().eq(1).find(':checkbox');
	    if($(this).is(':checked')) {
	        checkboxes.prop('checked', true);
	    } else {
	        checkboxes.prop('checked', false);
	    }
    });
	
});