$(document).ready(() => {
    let $btn1 = $("#darkViolet");
    let $btn2 = $("#blueViolet");
    let $btn3 = $("#darkOrchid");
    let $btn4 = $("#mediumOrchid");
    let $btn5 = $("#mediumPurple");
    let $btn6 = $("#plum");
     $btn1.on({
    click: () => {
        var drkVlt = "darkViolet";
  paint(drkVlt);
    }
  });
    $btn1.on({
    click: () => {
        var drkVlt = "darkViolet";
  paint(drkVlt);
    }
  });
    $btn1.on({
    click: () => {
        var drkVlt = "darkViolet";
  paint(drkVlt);
    }
  });
    $btn1.on({
    click: () => {
        var drkVlt = "darkViolet";
  paint(drkVlt);
    }
  });
    $btn1.on({
    click: () => {
        var drkVlt = "darkViolet";
  paint(drkVlt);
    }
  });
    $btn1.on({
    click: () => {
        var drkVlt = "darkViolet";
  paint(drkVlt);
    }
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
});
