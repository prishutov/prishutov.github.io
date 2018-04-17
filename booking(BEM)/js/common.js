// Slider

var images = document.querySelectorAll('.slider__photo img');
var currentLine = document.querySelector('.slider__current');
var currentCircle = document.querySelector('.slider__current-circle');
var i = 0;

function slider() {
	images[i].style.opacity = "0";
	currentLine.style.width = '5%';
	currentCircle.style.left = '4%';
	i++;

	// currentLine.style.width = '5%';

	if(i == 0) {
		currentLine.style.width = '5%';
		currentCircle.style.left = '4%';	
	}; 

	if(i == 1) {
		currentLine.style.width = '35%';
		currentCircle.style.left = '35%';	
	};

	if(i == 2) {
		currentLine.style.width = '66%';
		currentCircle.style.left = '65%';	
	};

	if(i == 3) {
		currentLine.style.width = '96%';
		currentCircle.style.left = '95%';	
	};  


	if (i >= images.length) {
		i=0;
	}

	images[i].style.opacity = "1";

}
setInterval(slider, 3000);

// on slider buttons click

var btn_X = document.querySelector('#x-small');
var btn_S = document.querySelector('#small');
var btn_M = document.querySelector('#medium');
var btn_L = document.querySelector('#large');



btn_X.onclick = function() {
	var p = 0;
	for (p = 0; p <= images.length; p++){
		images[p].style.opacity = "0";
		images[0].style.opacity = "1";
		currentLine.style.width = '5%';
		currentCircle.style.left = '4%';
		i = 0;
	}	
}

btn_S.onclick = function() {
	for (p = 0; p <= images.length; p++){
		images[p].style.opacity = "0";
		images[1].style.opacity = "1";
		currentLine.style.width = '35%';
		currentCircle.style.left = '35%';
		i = 1;
	}	
}

btn_M.onclick = function() {
	for (p = 0; p <= images.length; p++){
		images[p].style.opacity = "0";
		images[2].style.opacity = "1";
		currentLine.style.width = '66%';
		currentCircle.style.left = '65%';
		i = 2;
	}	
}

btn_L.onclick = function() {
	for (p = 0; p <= images.length; p++){
		images[p].style.opacity = "0";
		images[3].style.opacity = "1";
		currentLine.style.width = '96%';
		currentCircle.style.left = '95%';
		i = 3;
	}	
}

