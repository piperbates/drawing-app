function board() {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  canvas.height = 500;
  canvas.width = 500;

  let painting = false;

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function finishPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e){
if(!painting) {return};
    ctx.lineWidth = brushSize;
    ctx.lineCap = capShape;

    ctx.lineTo(e.clientX, e.clientY)
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY)
  }





  // listeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("touchstart", startPosition);

  window.addEventListener("mouseup", finishPosition);
  window.addEventListener("touchend", finishPosition);

  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("touchmove", draw);
}






// window.addEventListener("resize", resize);
