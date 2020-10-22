let smallButton = document.querySelector("#smallSize")
let medButton = document.querySelector("#medSize")
let largeButton = document.querySelector("#largeSize")
let fill = document.querySelector("#fill")
let resetButton = document.querySelector("#deleteAll")

window.addEventListener("load", board);




smallButton.addEventListener("click", sizeChangeSmall)
medButton.addEventListener("click", sizeChangeMed)
largeButton.addEventListener("click", sizeChangeLarge)

fill.addEventListener("click", changeBg)

resetButton.addEventListener("click", deleteAll)
