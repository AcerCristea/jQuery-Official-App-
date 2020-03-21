$(document).ready(() => {
     let $btn1 = $("#red");
    let $btn2 = $("#blue");
    let $btn3 = $("#green");
    let $btn4 = $("#purple");
    let $btn5 = $("#yellow");
    let $btn6 = $("#orange");
    $btn1.on({
        click: () => {
            let $red = "red";
            paint(event,$red);
        }
    });
    $btn2.on({
        click: () => {
            let $blue = "blue";
            paint(event, $blue);
        }
    });
    $btn3.on({
        click: () => {
            let $green = "green";
            paint(event, $green);
        }
    });
    $btn4.on({
        click: () => {
            let $purple = "purple";
            paint(event, $purple);
        }
    });
    $btn5.on({
        click: () => {
            let $yellow = "yellow";
            paint(event, $yellow);
        }
    });
    $btn6.on({
        click: () => {
            let $orange = "orange";
            paint(event, $orange);
        }
    });

    let $board = $("#board");
    let $ctx = $board[0].getContext('2d');
    $board.on("mousemove", (event) => {
        paint(event);
    });
     $board.on("mousedown", (event) => {
        erase(event);
    });

    function paint(e, color) {
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        $ctx.fillStyle = color;
        $ctx.fillRect(mouseX, mouseY, 6, 6);
    }
    function erase(e) {
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        $ctx.fillStyle = "white";
        $ctx.fillRect(0, 0, 100000, 100000);
    }
});
