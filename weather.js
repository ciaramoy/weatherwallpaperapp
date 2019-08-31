
window.onload = function settime(){
	var today = new Date();
	var y=document.getElementById("time");
	var day= document.getElementById("day");
	var hour= today.getHours();
	var minute= today.getMinutes();
	
	if (hour<5||hour>17){ //assuming sunrise starts at 5 am and sunset at 5pm
			day.style.opacity =0;
	}
	else if (hour>5){
			day.style.opacity =1.0;
	}
	else if(hour==5||hour==17){
		day.style.opacity=minute/60;
	}
}