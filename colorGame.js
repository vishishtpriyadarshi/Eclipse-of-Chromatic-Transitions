var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var sq = document.querySelectorAll(".square");
var picked = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resestButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected"); 
	easyBtn.classList.add("selected");
	numberOfSquares = 3;
	
	colors = generateRandomColors(numberOfSquares);
	picked = pickColor();
	colorDisplay.textContent = picked;

	for(var i = 0; i < sq.length; i++)
	{
		if(colors[i])                                  // since undefined evaluates to false
			sq[i].style.backgroundColor = colors[i];
		else
			sq[i].style.display = "none";
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberOfSquares = 6;

	colors = generateRandomColors(numberOfSquares);
	picked = pickColor();
	colorDisplay.textContent = picked;

	for(var i = 0; i < sq.length; i++)
	{    
	    sq[i].style.backgroundColor = colors[i];
		sq[i].style.display = "block";
	}

});


resestButton.addEventListener("click", function(){
	
	colors = generateRandomColors(numberOfSquares);
	picked = pickColor();
	colorDisplay.textContent = picked;
	this.textContent = "New Colors"                  /* OR resetButton.textContent = ... */
	for(var i = 0; i < sq.length; i++)
		sq[i].style.backgroundColor = colors[i];

	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";

});

colorDisplay.textContent = picked;

for(var i = 0; i < sq.length; i++)
{
	sq[i].style.backgroundColor = colors[i];

	//Add Click Listeners to sqaures
	sq[i].addEventListener("click", function(){

		//Grab color of Picked Square
		var clickedColor = this.style.backgroundColor;
		
		//compare to picked Color
		if(clickedColor === picked)
		{
			messageDisplay.textContent = "Achievement Point :D";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resestButton.textContent = "Endless Apoptosis !!!";
		}
		else
		{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Meltdown :(";
		}


	});

}

function changeColors(color)
{
	for(var i = 0; i < colors.length; i++)
	{
		sq[i].style.backgroundColor = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = [];

	for(var i = 0; i < num; i++)
		arr.push(randomColor());
	
	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256); 			// Picks red from 0 - 255
	var g = Math.floor(Math.random() * 256); 			// Picks green from 0 - 255
	var b = Math.floor(Math.random() * 256); 			// Picks blue from 0 - 255

	return "rgb(" + r + ", " + g + ", " + b + ")"; 		// Spaces are REQUIRED

}