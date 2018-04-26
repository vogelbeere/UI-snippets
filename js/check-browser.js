 
 function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

$(document).ready(function() {
  
	$('#dynamic').removeClass('noscript');
  /* check browser */
  var myBrowser = $.browser.name;
 $( "#my-browser" ).html( "You are using <strong>" + toTitleCase(myBrowser) + ' ' +  $.browser.versionNumber + ".</strong>" );
  
  /* check cookies */
  

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
  
  /* check Flash */
  
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
  
  /* check IP address */
  
    $.getJSON('https://jsonip.com?callback=?',
    function(data) 	{
       $('#my-ip').html('Your IP address is <strong>' + data.ip + '</strong>');
	});
  
  /* check Java and JavaScript */
   
    var javaIsEnabled = navigator.javaEnabled();
    if(javaIsEnabled = 'true') {
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
  
  /* check language */
       $.ajax({ 
    url: "https://ajaxhttpheaders.appspot.com", 
    dataType: 'jsonp', 
    success: function(headers) {
       var language = headers['Accept-Language'];
       console.log(language);
       var myLang = language.substring(0,5);
		if (myLang = 'en-GB') {
			$("#my-language").html( "Your preferred language is <strong>British English</strong> (" + myLang + ').');
		}		else if (myLang = 'en-US')	{
			$("#my-language").html( "Your preferred language is <strong>American English</strong> (" + myLang + ').');
		}
		else if (myLang = 'en')		{
			$("#my-language").html( "Your preferred language is <strong>English</strong> (" + myLang + ').');
		}
		else 
		{
			$("#my-language").html( "Your preferred language is <strong>" + myLang + '</strong>');
		}
    }
	});
  /* screen resolution */
      var width = screen.width;

	 var height = screen.height;
	 
	 $("#my-screenres").html( "Your screen resolution is <strong>" + width + ' x ' + height + '</strong>.');
});	

