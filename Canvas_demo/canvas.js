const WIDTH = 900, HEIGHT = 500;

/**
 * @type {HTMLCanvasElement}
 */

let canvas = document.getElementById("myCanvas");
let pen = canvas.getContext("2d");

pen.canvas.width = WIDTH;
pen.canvas.height = HEIGHT;
canvas.style.border = "2px solid black";


function clear(){
    pen.clearRect(0, 0, WIDTH, HEIGHT);
}

function loop(){
    let FPS = 40;
    let timeLoop = 1000/FPS;
    let transparency = 0;
    let counter = 0;
    
    setInterval(() => {
        
        if(transparency < 1  && counter == transparency){
            transparency += 0.01;
            counter += 0.01
        }else if(transparency > 0){
            transparency -= 0.01;
            if(transparency < 0){
                counter = transparency;
            }

        }
        clear();
        noFace(1);
    }, timeLoop);
}


loop();

let points = [
    {x: WIDTH/3.5 + 20, y: HEIGHT},
    {x: WIDTH/3, y: HEIGHT/2},
    {x: WIDTH/2.7, y: HEIGHT/4},
    {x: WIDTH/1.8, y: HEIGHT/4},
    {x: WIDTH/1.69, y: HEIGHT/2},
];


function noFace(transparency){
    pen.globalAlpha = transparency;
    
    pen.beginPath();
    pen.moveTo(points[0].x, points[0].y);
    pen.quadraticCurveTo(WIDTH/3 - 30, HEIGHT/2 + 120, WIDTH/3, HEIGHT/2)
    pen.lineWidth = 2;
    pen.fillStyle = "black";





    pen.moveTo(points[1].x, points[1].y);
    pen.quadraticCurveTo(WIDTH/2.8, HEIGHT/2.7, WIDTH/2.7, HEIGHT/4);



    pen.lineTo(points[2].x, points[2].y);
    pen.bezierCurveTo(WIDTH/2.5, HEIGHT - 500 , WIDTH/1.9, HEIGHT - 500, WIDTH/1.8, HEIGHT/4);





    pen.lineTo(points[3].x, points[3].y);
    pen.quadraticCurveTo(WIDTH/1.76, HEIGHT/2.7, WIDTH/1.69, HEIGHT/2);





    pen.lineTo(points[4].x , points[4].y);
    pen.quadraticCurveTo(WIDTH/1.6, HEIGHT/2 + 120, WIDTH/1.62, HEIGHT)


    pen.lineTo(points[0].x , points[0].y);
    pen.strokeStyle = "black";
    pen.stroke();


    pen.fill();
    pen.closePath();

    pen.beginPath();
    pen.ellipse(WIDTH/2 - 32, HEIGHT/3.5, 65, 85, 0, 0, 2 * Math.PI);
    pen.fillStyle = "white";
    pen.fill();
    pen.strokeStyle = "white";
    pen.stroke();
    pen.closePath();

    //eye
    pen.beginPath();
    pen.ellipse(WIDTH/2 - 65, HEIGHT/4.2, 11, 7, 0, 0, 2 * Math.PI);
    pen.fillStyle = "black";
    pen.fill();
    pen.strokeStyle = "black";
    pen.stroke();
    pen.closePath();
    //eye
    pen.beginPath();
    pen.ellipse(WIDTH/2 + 2, HEIGHT/4.2, 11, 7, 0, 0, 2 * Math.PI);
    pen.fillStyle = "black";
    pen.fill();
    pen.strokeStyle = "black";
    pen.stroke();
    pen.closePath();


    //mouth
    pen.beginPath();
    pen.ellipse(WIDTH/2.14, HEIGHT/2.4, 13, 3, 0, 0, 2 * Math.PI);
    pen.fillStyle = "rgb(98,93,115)";
    pen.fill();
    pen.strokeStyle = "rgb(98,93,115)";
    pen.stroke();
    pen.closePath();

    pen.beginPath();
    pen.ellipse(WIDTH/2.14, HEIGHT/2.57, 21, 6, 0, 0, 2 * Math.PI);
    pen.fillStyle = "black";
    pen.fill();
    pen.strokeStyle = "black";
    pen.stroke();
    pen.closePath();


    //under eyes
    pen.beginPath();
    pen.ellipse(WIDTH/2 - 65, HEIGHT/3.75, 7, 1.5, 0, 0, 2 * Math.PI);
    pen.fillStyle = "black";
    pen.fill();
    pen.strokeStyle = "black";
    pen.stroke();
    pen.closePath();


    pen.beginPath();
    pen.ellipse(WIDTH/2 + 2, HEIGHT/3.75, 7, 1.5, 0, 0, 2 * Math.PI);
    pen.fillStyle = "black";
    pen.fill();
    pen.strokeStyle = "black";
    pen.stroke();
    pen.closePath();


    //
    pen.beginPath();
    pen.moveTo(WIDTH/2 - 75, HEIGHT/4.7);
    pen.quadraticCurveTo(WIDTH/2.33, HEIGHT/8, WIDTH/2 - 54, HEIGHT/4.7);
    pen.fillStyle = "rgb(98,93,115)";
    pen.fill();
    pen.strokeStyle = "rgb(98,93,115)";
    pen.stroke();
    pen.closePath();


    pen.beginPath();
    pen.moveTo(WIDTH/2 - 8.5, HEIGHT/4.7);
    pen.quadraticCurveTo(WIDTH/2, HEIGHT/8, WIDTH/2 + 12, HEIGHT/4.7);
    pen.fillStyle = "rgb(98,93,115)";
    pen.fill();
    pen.strokeStyle = "rgb(98,93,115)";
    pen.stroke();
    pen.closePath();


    pen.beginPath();
    pen.moveTo(WIDTH/2 - 75, HEIGHT/3.5);
    pen.quadraticCurveTo(WIDTH/2.33, HEIGHT/2.3, WIDTH/2 - 54, HEIGHT/3.5);
    pen.fillStyle = "rgb(98,93,115)";
    pen.fill();
    pen.strokeStyle = "rgb(98,93,115)";
    pen.stroke();
    pen.closePath();


    pen.beginPath();
    pen.moveTo(WIDTH/2 - 7, HEIGHT/3.5);
    pen.quadraticCurveTo(WIDTH/2, HEIGHT/2.3, WIDTH/2 + 12, HEIGHT/3.5);
    pen.fillStyle = "rgb(98,93,115)";
    pen.fill();
    pen.strokeStyle = "rgb(98,93,115)";
    pen.stroke();
    pen.closePath();

    
}
