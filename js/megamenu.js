
 $(document).ready(function () {	
	$('.level1 > a').hover(function()	{
	if ($(this).attr('class') != 'is-active')		{
			$('.level1 a').removeClass('is-active');
			$(this).addClass('is-active');
		}
	});
   
   $('.level1 > a').click(function()	{
      $('.subnav').hide();
      $(this).next('.subnav').show();
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
   
   $('#toggle-navbar').click(function() {
     $(".navbar").toggle();
   });
      
   $('main').click(function() {
     $(".navbar").hide();
   });

});

