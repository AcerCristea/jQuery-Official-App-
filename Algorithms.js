$(document).ready(() => {
<<<<<<< HEAD
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


=======
    let btn1 = document.getElemen("red");
    btn1.addEventListener("click", () => {
        var drkVlt = "red";
        paint(drkVlt);
    });
    var btn2 = document.getElementById("blue");
    btn2.addEventListener("click", () => {
        var bVlt = "blue";
        paint(bVlt);
    });
    var btn3 = document.getElementById("green");
    btn3.addEventListener("click", () => {
        var drkOrc = "green";
        paint(drkOrc);
    });
    var btn4 = document.getElementById("purple");
    btn4.addEventListener("click", () => {
        var medOrc = "purple";
        paint(medOrc);
    });
    var btn5 = document.getElementById("yellow");
    btn4.addEventListener("click", () => {
        var medPrp = "yellow";
        paint(medPrp);
    });
    var btn6 = document.getElementById("orange");
    btn4.addEventListener("click", () => {
        var plum = "orange";
        paint(plum);
    });
>>>>>>> master/master

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



$("keypress", (event) => {
      if (event.key == "c"){
    paint();
}
});



