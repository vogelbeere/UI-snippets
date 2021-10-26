
 
 $(document).ready(function () 
	{	
		var browserHeight = $(window).height(); // returns height of browser viewport
		var iframeHeight = browserHeight * 0.7;
		$('.adjustable').height(iframeHeight);
		
		var browserWidth = $(window).width(); // returns width of browser viewport
		var iframeWidth = browserWidth * 0.33;
		$('.adjustable').width(iframeWidth);
	});
