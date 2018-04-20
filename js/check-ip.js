******

 */

$(document).ready(function() 
{
    $.getJSON('http://jsonip.com?callback=?',
    function(data)
	{
       $('#my-ip').html('Your IP address is ' + data.ip);
	});
});