******

 */

$(document).ready(function() 
{ 
    if(navigator.plugins && navigator.plugins.length>0)
		{
            var type = 'application/x-shockwave-flash';
            var mimeTypes = navigator.mimeTypes;
            if(mimeTypes && mimeTypes[type] && mimeTypes[type].enabledPlugin && mimeTypes[type].enabledPlugin.description)
			{
				$('#flash-enabled').removeClass('is-disabled');
				$('#flash-enabled').addClass('is-enabled');
				$('.noFlash').removeClass('is-visible');
				$('.noFlash').addClass('is-hidden');
				$('.yesFlash').removeClass('is-hidden');
				$('.yesFlash').addClass('is-visible');
			}
		}
});