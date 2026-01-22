document.body.style.cursor = url("cursor/small.png")

function deleteAll(){
    if(confirm("Start new canvas? The old one will be deleted")){
        txt="Okay"
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    color = black;
    backgroundColor = white;
    selectedColor.className = "";
    selectedColor.classList.add("blackSelect");
    clearHistory();
    } else {
        return
    }
}

// let historyArr = [];
// let redoArr = [];

// function addToHistory(){
//     // var canvas = document.getElementById("canvas");
//     var img = canvas.toDataURL("image/png");
//     historyArr.push(img);
// }

// function undo(){
//     console.log(historyArr)
//     let lastAction = historyArr.pop();
//     redoArr.push(lastAction);
//     console.log(redoArr)
// }

// function clearHistory(){
//     historyArr = [];
// }