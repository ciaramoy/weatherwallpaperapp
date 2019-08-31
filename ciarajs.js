
/*menu*/
function menutoggle() {
  var x = document.getElementById("mymenu");
  if (x.style.animation === "1s linear 0s 1 normal forwards running smallup") {
	x.style.animation="bigup 1s linear forwards";
	console.log(x.style.animation+"menu opened");
	}
  else {
	x.style.animation="1s linear 0s 1 normal forwards running smallup";
	console.log(x.style.animation+"menu closed");
  }
}
//sliders toggle
function slidertoggle(){ 
	var x=document.getElementById('slidertoggle');
	if (x.innerHTML==="But I prefer sliders"){
		document.getElementById('cloudcontrol').type = 'range';
		document.getElementById('daylightcontrol').type = 'range';
		document.getElementById('raincontrol').type = 'range';
		document.getElementById('starscontrol').type = 'range';
		x.innerHTML="Please, I have a penchant for precision...";
	}
	else{
		document.getElementById('cloudcontrol').type = 'number';
		document.getElementById('daylightcontrol').type = 'number';
		document.getElementById('raincontrol').type = 'number';
		document.getElementById('starscontrol').type = 'number';
		x.innerHTML="But I prefer sliders";
	}
}


//weather controls

function clouds() {
  var val= document.getElementById("cloudcontrol").value;
  var weather= document.getElementById("clouds");
  weather.style.opacity = val*.1;
}
function rain() {
  var val= document.getElementById("raincontrol").value;
  var weather= document.getElementById("rain");
  weather.style.opacity = val*.1;
}
function daylight() {
  var val= document.getElementById("daylightcontrol").value;
  var weather= document.getElementById("day");
  weather.style.opacity = val*.1;
}
//stars twinkling
function stars() {
  var val= document.getElementById("starscontrol").value;
  var weather= document.getElementById("stars");
  var blink= document.getElementById("starblink");
  var blink2= document.getElementById("starblink2");
  weather.style.opacity = val*.1;
  if (weather.style.opacity<0.1){
	      blink.style.display = "none";
	      blink2.style.display = "none";
  } else {
    blink.style.display = "block";
    blink2.style.display = "block";
  }	 
}
//cue the lightning
function light() {
  var x= document.getElementById("light");
  var y=document.getElementById("lightbutton");
    if (y.innerHTML==="Lightning") {
    x.style.display = "block";
	y.innerHTML="No Lightning";
  } else {
    x.style.display = "none";
	y.innerHTML="Lightning";
  }
}
//sunrise and sunset
function sun() {
  var x= document.getElementById("sun");
  var y=document.getElementById("sunbutton");
    if (y.innerHTML==="Sunrise" ) {
    x.style.animation= "anirise 6s linear forwards, anirisac 6s ease-in forwards" ;
	y.innerHTML="Sunset";
  } else {
   x.style.animation= "aniset 6s ease-in forwards, anisetac 6s linear forwards" ;
	y.innerHTML="Sunrise";
  }
}

function moon() {
  var x= document.getElementById("moon");
  var y=document.getElementById("moonbutton");
    if (y.innerHTML==="Moon" ) {
    x.style.animation= "anirise 5s linear forwards, anirisac 5s ease-in forwards" ;
	y.innerHTML="No Moon";
  } else {
   x.style.animation= "aniset 5s ease-in forwards, anisetac 5s linear forwards" ;
	y.innerHTML="Moon";
  }
}

//pausing and playing
function pauseplay(x){
	var y=document.getElementById(x);
	if (y.style.animationPlayState==="running"){
		y.style.animationPlayState="paused";
	}
	else{
		y.style.animationPlayState="running";
	}
}