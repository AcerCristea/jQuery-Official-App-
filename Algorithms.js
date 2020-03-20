$(document).ready(() => {
<<<<<<< HEAD
    let $btn1 = $("#red");
    let $btn2 = $("#blue");
    let $btn3 = $("#green");
    let $btn4 = $("#purple");
    let $btn5 = $("#yellow");
    let $btn6 = $("#orange");
     $btn1.on({
    click: () => {
        var drkVlt = "red";
  paint(drkVlt);
    }
  });
    $btn1.on({
    click: () => {
        var drkVlt = "blue";
  paint(drkVlt);
    }
  });
    $btn1.on({
    click: () => {
        var drkVlt = "green";
  paint(drkVlt);
    }
  });
    $btn1.on({
    click: () => {
        var drkVlt = "purple";
  paint(drkVlt);
    }
  });
    $btn1.on({
    click: () => {
        var drkVlt = "yellow";
  paint(drkVlt);
    }
  });
    $btn1.on({
    click: () => {
        var drkVlt = "orange";
  paint(drkVlt);
    }
  });


=======
>>>>>>> master/master
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



