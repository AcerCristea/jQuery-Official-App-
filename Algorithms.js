$(document).ready(() => {
            let $btn1 = $("#red");
            let $btn2 = $("#blue");
            let $btn3 = $("#green");
            let $btn4 = $("#purple");
            let $btn5 = $("#yellow");
            let $btn6 = $("#orange");
            $btn1.on({
                click: () => {
                    var red = "red";
                    paint(red);
                }
            });
            $btn2.on({
                click: () => {
                    var blue = "blue";
                    paint(blue);
                }
            });
            $btn3.on({
                click: () => {
                    var green = "green";
                    paint(green);
                }
            });
            $btn4.on({
                click: () => {
                    var purple = "purple";
                    paint(purple);
                }
            });
            $btn5.on({
                click: () => {
                    var yellow = "yellow";
                    paint(yellow);
                }
            });
            $btn6.on({
                click: () => {
                    var orange = "orange";
                    paint(orange);
                }
            });

            let $board = ("#board");
            let $ctx = $board.getContext('2d');
            $board("mousemove", (event) => {
                paint(event);
            });

            function paint(e, color) {
                let mouseX = e.offsetX;
                let mouseY = e.offsetY;
                $ctx.fillStyle = color;
                $ctx.fillRect(mouseX, mouseY, 6, 6);
            }

            //$("keypress", (event) => {
              //      if (event.key == "c") {
                    //    paint();
                    //});
            });
