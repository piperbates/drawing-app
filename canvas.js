function board() {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  canvas.height = window.innerHeight-100;
  canvas.width = window.innerWidth-100;

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

    let xoffset = 55;
    let yoffset = 70;
    ctx.lineTo(e.clientX - xoffset, e.clientY - yoffset)
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - xoffset, e.clientY - yoffset)
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
