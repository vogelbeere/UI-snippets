
 
  	$(document).ready(function () 
	{	
	
		var colorSchemes = document.getElementsByClassName('scheme');
		
		for (var i = 0; i < colorSchemes.length; i++)
		{
			var colorsDiv = colorSchemes[i].getElementsByClassName('colors')[0];
			appendCaptions(colorsDiv);
		}
		
		var tocList = document.getElementById('toc');
		var headings = document.getElementsByClassName('heading');
		
		for (var i = 0; i < headings.length; i++)
		{
		var headingId = headings[i].getAttribute('id');
		var headingText = headings[i].textContent;
		
			if(i == 0)
			{
				tocList.innerHTML = tocList.innerHTML + '<li class="tab-link current" data-tab="tab-' + i + '">' + headingText + '</li>';
			}
			else 
			{
				tocList.innerHTML = tocList.innerHTML + '<li class="tab-link" data-tab="tab-' + i + '">' + headingText + '</li>';
			}
		}
		
		/* tabbed section */

		$('ul.tabs li').click(function()
		{
			var tab_id = $(this).attr('data-tab');

			$('ul.tabs li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
		});
		
	});
	
	/* functions */
	
	function appendCaptions(parentDiv)
	{
	   var items = parentDiv.getElementsByClassName('swatch');

		for (var i = 0; i < items.length; i++)
		{
		var captionDiv = parentDiv.parentNode.getElementsByClassName('captions')[0];
		
		captionDiv.innerHTML = captionDiv.innerHTML + '<div class="caption">' + items[i].title + '<br>' + hexToRgb(items[i].title).r + ',' + hexToRgb(items[i].title).g + ','+ hexToRgb(items[i].title).b + '</div>';
		
		}
	}
	
	function hexToRgb(hex) 
	{
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}


