var numSquares=6;
var colors=generateRandomColor(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#messageDisplay");
var h1=document.querySelector("h1");
var easyBtn=document.getElementById("easyBtn");
var hardBtn=document.getElementById("hardBtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares=3;
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares=6;
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
});

var resetButton=document.querySelector("#reset");
resetButton.addEventListener("click",function(){
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	this.textContent="New Colors";
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
});

colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			h1.style.backgroundColor=clickedColor;
			changeColor(clickedColor);
			messageDisplay.textContent="Correct!";
			resetButton.textContent="Play Again?"
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}
function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColor(num){
	var arr=[]
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}