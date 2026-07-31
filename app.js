const { Socket } = require("dgram");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")("server");
app.use(express.static("public"));
app.use(express.json());
let userMap = {};
io.on("connection", (socket) => {
  socket.on("newuser", async ({ socketId, name }) => {
    userMap[socketId] = name;
    let clients = [];
    let sockets = await io.fetchSockets();
    sockets.forEach();
  });
});
socket.emit("useradded", {
  msg: "User added successfully",
  username: userMap[Socket.id],
  clients,
  clientCount: clients.length,
});
socket.brodcast.emit("updatedetails", {
  msg: "New user added",
  clients,
  clientCount: clients.length,
});
socket.on("newmsg", ({ socketId, msg }) => {
  io.emit("msgrecieved", {
    msg,
    username: userMap[socketId],
    socketId: socket.id,
    clientCount: io.engine.clientCount
  });
});
server.listen(3000);
chatapplication.appendChild(chatmsg);
chats.appendChild(chat);