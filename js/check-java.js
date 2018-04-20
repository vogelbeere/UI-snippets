**

 */

$(document).ready(function() 
{
    var javaIsEnabled = navigator.javaEnabled();
    if(javaIsEnabled = 'true')
	{
        $('#java-enabled').removeClass('is-disabled');
		$('#java-enabled').addClass('is-enabled');
		$('.noJava').removeClass('is-visible');
		$('.noJava').addClass('is-hidden');
		$('.yesJava').removeClass('is-hidden');
		$('.yesJava').addClass('is-visible');
		// if this script works, then JavaScript is also enabled, so indicate that
		$('#js-enabled').removeClass('is-disabled');
		$('#js-enabled').addClass('is-enabled');
		$('.yesJs').removeClass('is-hidden');
		$('.yesJs').addClass('is-visible');
		$('.noJs').removeClass('is-visible');
		$('.noJs').addClass('is-hidden');
    }
});