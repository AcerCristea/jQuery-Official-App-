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
                    paint($red);
                }
            });
            $btn2.on({
                click: () => {
                    let $blue = "blue";
                    paint($blue);
                }
            });
            $btn3.on({
                click: () => {
                    let $green = "green";
                    paint($green);
                }
            });
            $btn4.on({
                click: () => {
                    let $purple = "purple";
                    paint($purple);
                }
            });
            $btn5.on({
                click: () => {
                    let $yellow = "yellow";
                    paint($yellow);
                }
            });
            $btn6.on({
                click: () => {
                    let $orange = "orange";
                    paint($orange);
                }
            });

            let $board = $("#board");
            let $ctx = $board[0].getContext('2d');
            $board.on("mousemove", (event) => {
                paint(event);
            });
            $board.on("keypress", function(c) {
              if(c.keyCode == 13){
                $ctx.clearRect(0, 0, 600, 150);
              }
            });

            function paint(e, color) {
                let mouseX = e.offsetX;
                let mouseY = e.offsetY;
                $ctx.fillStyle = color;
                $ctx.fillRect(mouseX, mouseY, 6, 6);
            }



           /* $("keypress", (event) => {
                    if (event.key == "c") {
                       paint();
                    });*/
            });
