let c;
let socket;
let data;
function setup() {
let canvas = createCanvas(displayWidth, displayHeight);
background(0)
socket = io.connect("http://127.0.0.1:80");
socket.on("mouseout", newDrawing);
}

function newDrawing(data) {
    c = color(255, 255, 255);
    strokeWeight(5);
    stroke(c);
line(data.x, data.y, data.px, data.py)
}
function mouseDragged() {
    c = color(255, 255, 255);
    strokeWeight(5);
    stroke(c);
    line(mouseX, mouseY, pmouseX, pmouseY);
    data = {
x: mouseX, 
y: mouseY,
px: pmouseX,
py: pmouseY
}
console.log(data.x + ", " + data.y)
socket.emit("mousein", data)
}
function savefunction() {
    saveCanvas(canvas, 'MyCanvas', 'png')
}
