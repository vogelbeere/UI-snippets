
 $(document).ready(function(){

    setInterval(refreshPage,300000);  //set refresh interval to every 5 minutes = 300000 ms

    function refreshPage()
	{
		location.reload();
    }

});

 function pad(num) {
	  return num<10?"0"+num:num;
	}
	$(function() {
	  var tCont = $('#counttime');
	  var timer = tCont.html().split(':');

	  if (timer.length === 5) timer.unshift(0);
	  var endMilli= timer[0]*60*60*1000;
	  endMilli += timer[1]*60*1000
	  endMilli += timer[2]*1000;
	  if(endMilli > 0) {
		var endTime = new Date(Date.now()+endMilli);
		var tId = setInterval(function() {
		  var diff = endTime.getTime()-Date.now();
		  if (diff<=0) {
			tCont.html("00:00:00");
			clearInterval(tId);
		  }
		  else {
			var d = new Date(diff);
			var hh = pad(d.getUTCHours());
			var mm = pad(d.getMinutes());
			var ss = pad(d.getSeconds());
			tCont.html(""+hh+":"+mm+":"+ss);
		  }
		},300);
	  }
	});;


