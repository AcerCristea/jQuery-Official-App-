var btn1 = document.getElementById("darkViolet");
btn1.addEventListener("click", () => {
    var drkVlt = "darkViolet";
    paint(drkVlt);
});
var btn2 = document.getElementById("blueViolet");
btn2.addEventListener("click", () => {
    var bVlt = "blueViolet";
    paint(bVlt);
});
var btn3 = document.getElementById("darkOrchid");
btn3.addEventListener("click", () => {
    var drkOrc = "darkOrchid";
    paint(drkOrc);
});
var btn4 = document.getElementById("mediumOrchid");
btn4.addEventListener("click", () => {
    var medOrc = "mediumOrchid";
    paint(medOrc);
});
var btn5 = document.getElementById("mediumPurple");
btn4.addEventListener("click", () => {
    var medPrp = "mediumPurple";
    paint(medPrp);
});
var btn6 = document.getElementById("plum");
btn4.addEventListener("click", () => {
    var plum = "plum";
    paint(plum);
});

var board = document.getElementById("board");
var ctx = board.getContext('2d');
board.addEventListener("mousemove", (event) => {
    paint(event)
});

function paint(e, color) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    ctx.fillStyle = color;
    ctx.fillRect(mouseX, mouseY, 6, 6);
}

window.addEventListener("keypress", clear);
var canvas = document.getElementById("board");

function clear(event) {
    let context = canvas.getContext('2d');
    if (event.key === "c") {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
}
