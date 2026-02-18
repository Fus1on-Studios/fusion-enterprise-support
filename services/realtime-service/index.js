import { Server } from "socket.io";
import http from "http";

const server = http.createServer();
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", socket => {
  console.log("Dashboard connected");
});

server.listen(5002);
