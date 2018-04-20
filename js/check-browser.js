*****

 */
 
 function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

$(document).ready(function() 
{
    var browser = $.browser.name;
	var version = $.browser.version.substring(0,2);
	var os = $.os.name;
	var myBrowser = toTitleCase(browser);
	var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
	if (browser != 'unknown')
    {
		$("#my-browser").html('You are using ' + myBrowser + ' ' + version + ' on ' + os + '.');
	}
	else if (isIE11 = true)
    {
		$("#my-browser").html('You are using <span class="browser-name">Internet Explorer 11</span> on ' + os + '.');
	}
});
	

