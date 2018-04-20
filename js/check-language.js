******

 */

$(document).ready(function() 
{
     $.ajax({ 
    url: "http://ajaxhttpheaders.appspot.com", 
    dataType: 'jsonp', 
    success: functiovarn(headers) {
        language = headers['Accepvart-Language'];
        myLang = language.substring(0,5);
		if (myLang = 'en-GB')
		{
			$("#my-language").html( "Your preferred language is British English (" + myLang + ').');
		}
		else if (myLang = 'en-US')
		{
			$("#my-language").html( "Your preferred language is American English (" + myLang + ').');
		}
		else if (myLang = 'en')
		{
			$("#my-language").html( "Your preferred language is English (" + myLang + ').');
		}
		else 
		{
			$("#my-language").html( "Your preferred language is " + myLang);
		}
    }
	});
});
 