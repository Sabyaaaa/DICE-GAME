//    For image 1
var randomNumber1 = Math.floor(Math.random() * 6) +1;    //1- 6

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1 ; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);