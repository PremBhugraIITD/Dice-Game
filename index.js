var randNumber1 = Math.floor(Math.random()*6)+1;
console.log(randNumber1);
document.querySelector(".img1").setAttribute("src","./images/dice" + randNumber1 + ".png");
var randNumber2 = Math.floor(Math.random()*6)+1;
console.log(randNumber2);
document.querySelector(".img2").setAttribute("src","./images/dice" + randNumber2 + ".png");
if(randNumber1>randNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randNumber1<randNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
}