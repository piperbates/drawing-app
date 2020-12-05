function deleteAll(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    color = black;
    backgroundColor = white;
    selectedColor.className = "";
    selectedColor.classList.add("blackSelect");

}

