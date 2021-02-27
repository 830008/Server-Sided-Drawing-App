const express = require("express");
const socket = require("socket.io");
const app = express();
const server = app.listen(80);
app.use(express.static("./public"));
const io = socket(server);
io.sockets.on("connection", newConnection);
function newConnection(socket) {
console.log("New Connection: " + socket.id);
socket.on("mousein", MouseMsg);
function MouseMsg(data) {
    socket.broadcast.emit("mouseout", data);
    console.log(data);
}

}