let blueButton = document.querySelector("#blue");
let redButton = document.querySelector("#red");
let yellowButton = document.querySelector("#yellow");
let greenButton = document.querySelector("#green");
let purpleButton = document.querySelector("#purple");
let brownButton = document.querySelector("#brown");
let blackButton = document.querySelector("#black");
let whiteButton = document.querySelector("#white");
let fillButton=document.querySelector("#fill");

let selectedColor = document.querySelector("#selectedColor");
let color = "black";

blueButton.addEventListener("click", ()=>colorChanger("blue"));
redButton.addEventListener("click", ()=>colorChanger("red"));
yellowButton.addEventListener("click",()=>colorChanger("yellow"));
greenButton.addEventListener("click", ()=>colorChanger("green"));
purpleButton.addEventListener("click", ()=>colorChanger("purple"));
brownButton.addEventListener("click", ()=>colorChanger("brown"));
blackButton.addEventListener("click", ()=>colorChanger("black"));
whiteButton.addEventListener("click", ()=>colorChanger("white"));

let backgroundColor = color;

function colorChanger (pressedColor) {
    color=pressedColor;
    selectedColor.className = "";
    selectedColor.classList.add(`${color}Select`);
    fillButton.style.backgroundColor=color;
}

function changeBg(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}