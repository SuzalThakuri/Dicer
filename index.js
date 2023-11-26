var randomNum1 = Math.floor(Math.random() *6) +1;
var img1;
if(randomNum1 === 1){
    img1 = "images/dice1.png";
}else if(randomNum1 === 2){
    img1 = "images/dice2.png";
}else if(randomNum1 === 3){
    img1 = "images/dice3.png";
}else if(randomNum1 === 4){
    img1 = "images/dice4.png";
}else if(randomNum1 === 5){
    img1 = "images/dice5.png";
}else if(randomNum1 === 6){
    img1 = "images/dice6.png";
}
var randomNum2 = Math.floor(Math.random() *6) +1;
var img2;
if(randomNum2 === 1){
    img2 = "images/dice1.png";
}else if(randomNum2 === 2){
    img2 = "images/dice2.png";
}else if(randomNum2 === 3){
    img2 = "images/dice3.png";
}else if(randomNum2 === 4){
    img2 = "images/dice4.png";
}else if(randomNum2 === 5){
    img2 = "images/dice5.png";
}else if(randomNum2 === 6){
    img2 = "images/dice6.png";
}
document.querySelector("img.img1").setAttribute("src",img1);
document.querySelector("img.img2").setAttribute("src",img2);

if(randomNum1===randomNum2){
    document.querySelector("h1").innerHTML = "Draw";
}else if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}else{
    document.querySelector("h1").innerHTML = "Player 2 wins";
}