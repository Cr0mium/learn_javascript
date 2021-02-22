var canvas = document.getElementById("play");
var ctx = canvas.getContext("2d");
var y = canvas.height;
var x = canvas.width;
var r = 10;
var i = 0
var del = Math.PI / 240;
var b = 0;
var p = 1
var c = del + Math.PI / 2;
function draw() {
    console.clear()
    i = (i + 0.25 * p);
    if (i == 720 || i == 0) p *= (-1);
    b += del; b %= 720;
    c += del; c %= 720;
    ctx.beginPath();
    ctx.arc(i + 20, y * 2 / 3 - Math.abs(p * Math.sin(b) * r * 10), r, 0, 2 * Math.PI);
    ctx.strokeStyle="#000000"
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = "#00ffff"
    ctx.fill();
    ctx.beginPath();
    ctx.arc(720 - i + 20, y * 2 / 3 - Math.abs(p * Math.sin(c) * r * 10), r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = "#00ffff"
    ctx.fill();
}

var plot
function resume() {
    plot = setInterval(function () { draw() }, 2);
}

function pause() {
    clearInterval(plot);
}

var ci = 0;
var cb = 0;
function wipe() {
    {
        
        ctx.beginPath();
        ctx.arc(ci + 20, y * 2 / 3 - Math.abs(Math.sin(cb) * r * 10), r+2, 0, 2 * Math.PI);
        
        ctx.closePath();
        ctx.strokeStyle = "#00ffff"
        ctx.stroke();

        ctx.fillStyle = "#00ffff"
        ctx.fill();
        ctx.beginPath();
        ctx.arc(ci + 20, y * 2 / 3 - Math.abs(Math.sin(cb + Math.PI / 2) * r * 10), r+2, 0, 2 * Math.PI);
        
        ctx.closePath();
        ctx.strokeStyle = "#00ffff"
        ctx.stroke();

        ctx.fillStyle = "#00ffff"
        ctx.fill();
        ci = (ci + 1);
        cb += del*4;
        console.log(ci);
        if (ci > 720) clearInterval(stop_flag);
    }
}
var stop_flag
function clean() {
    ci=-1
    cb=0;
    i=0;
    b=0;
    c = del + Math.PI / 2;
    p=1;
    console.log("Working");
    stop_flag= setInterval(function () { wipe() }, 0.01);
}