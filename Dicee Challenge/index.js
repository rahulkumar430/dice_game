var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImage = "dice" + randomNumber1 +".png";
var randomImageSource = "images/" + randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDiceImage1 = "dice" + randomNumber2 +".png";
var randomImageSource2 = "images/" + randomDiceImage1;

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

var win1="🚩 Player1 Won!! ";
var win2="Player2 Won!! 🚩";
var draw="Draw !!";

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML=win1;
}
if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML=win2;
}
if(randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML=draw;
}
