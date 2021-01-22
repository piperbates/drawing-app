let smallButton = document.querySelector("#smallSize");
let medButton = document.querySelector("#medSize");
let largeButton = document.querySelector("#largeSize");
let fill = document.querySelector("#fill");
let resetButton = document.querySelector("#deleteAll");

window.addEventListener("load", board);

smallButton.addEventListener("click", sizeChangeSmall);
medButton.addEventListener("click", sizeChangeMed);
largeButton.addEventListener("click", sizeChangeLarge);

fill.addEventListener("click", changeBg);

resetButton.addEventListener("click", deleteAll);

//Save
const save = document.querySelector("#save");
const canvas = document.querySelector("#canvas");

//undo
// const undoButton = document.querySelector("#undo");
// undoButton.addEventListener("click", undo);

//Save button
let link = document.createElement("a");
link.innerHTML = `<button>Save<br/><i class="fas fa-save"></i></button>`;

link.addEventListener(
  "click",
  function () {
    link.href = canvas.toDataURL();
    link.download = "mypainting.png";
  },
  false
);

save.appendChild(link);

