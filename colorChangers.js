let blueButton = document.querySelector("#blue")
let redButton = document.querySelector("#red")
let yellowButton = document.querySelector("#yellow")
let greenButton = document.querySelector("#green")
let purpleButton = document.querySelector("#purple")
let brownButton = document.querySelector("#brown")
let blackButton = document.querySelector("#black")
let whiteButton = document.querySelector("#white")
blueButton.addEventListener("click", blue)
redButton.addEventListener("click", red)
yellowButton.addEventListener("click",yellow)
greenButton.addEventListener("click", green)
purpleButton.addEventListener("click", purple)
brownButton.addEventListener("click", brown)
blackButton.addEventListener("click", black)
whiteButton.addEventListener("click", white)

let color = "black"
let backgroundColor = color;

function blue(){
    color = "blue"
}
function red(){
    color = "red"
}
function yellow(){
    color = "yellow"
}
function green(){
    color = "green"
}
function purple(){
    color = "purple"
}
function brown(){
    color = "brown"
}
function black(){
    color = "black"
}
function white(){
    color = "white"
}


function changeBg(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}