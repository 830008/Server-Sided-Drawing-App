const express = require("express");
const socket = require("socket.io");
const Datastore = require("nedb");
const Database = new Datastore();
const app = express();
const server = app.listen(80);
app.use(express.static("./public"));
const io = socket(server);
io.sockets.on("connection", newConnection);
function newConnection(socket) {
console.log("New Connection: " + socket.id);
socket.on("mousein", MouseMsg);
socket.on("requestLoad", loadRequested);
function MouseMsg(data) {
    socket.broadcast.emit("mouseout", data);
    console.log(data);
    Database.insert({data})
}
function loadRequested(requestdata) {
console.log(requestdata);
}
}