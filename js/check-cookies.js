******

 */

$(document).ready(function() 
{
	$('#dynamic').removeClass('noscript');

    document.cookie = ({"cookietest" : "1"}); 
    if(document.cookie = "1")
	{
		$('#cookies-enabled').removeClass('is-disabled');
		$('#cookies-enabled').addClass('is-enabled');
		$('.yesCookies').removeClass('is-hidden');
		$('.yesCookies').addClass('is-visible');
		$('.noCookies').removeClass('is-visible');
		$('.noCookies').addClass('is-hidden');
	}
});