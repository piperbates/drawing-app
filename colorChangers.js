let blueButton = document.querySelector("#blue")
let redButton = document.querySelector("#red")
let yellowButton = document.querySelector("#yellow")
let greenButton = document.querySelector("#green")
let purpleButton = document.querySelector("#purple")
let brownButton = document.querySelector("#brown")
let blackButton = document.querySelector("#black")
let whiteButton = document.querySelector("#white")

let selectedColor = document.querySelector("#selectedColor")

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
    selectedColor.className = "";
    selectedColor.classList.add("blueSelect");

}
function red(){
    color = "red"
    selectedColor.className = "";
    selectedColor.classList.add("redSelect");
}
function yellow(){
    color = "yellow"
    selectedColor.className = "";
    selectedColor.classList.add("yellowSelect");
}
function green(){
    color = "green"
    selectedColor.className = "";
    selectedColor.classList.add("greenSelect");
}
function purple(){
    color = "purple"
    selectedColor.className = "";
    selectedColor.classList.add("purpleSelect");
}
function brown(){
    color = "brown"
    selectedColor.className = "";
    selectedColor.classList.add("brownSelect");
}
function black(){
    color = "black"
    selectedColor.className = "";
    selectedColor.classList.add("blackSelect");
}
function white(){
    color = "white"
    selectedColor.className = "";
    selectedColor.classList.add("whiteSelect");
}


function changeBg(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}