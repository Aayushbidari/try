function currentTime() {
	var date = new Date(); // creating object of date class
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var time = h+ ":" +m+":"+s;
	document.getElementById("clock").innerText = time;
	setTimeout(currentTime, 1000);
	//making clock displaying 12 hrs time format.
	if(h <= 12){
		var time =  h+ ":" +m+":"+s+ " " +"AM";
		document.getElementById("clock").innerText = time;
	}
	else 
	{
		h = h - 12;
		var time =  h+ ":" +m+":"+s+ " " +"PM";
		document.getElementById("clock").innerText = time;
	}
	
}
currentTime();