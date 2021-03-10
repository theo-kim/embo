
import { Socket } from "socket.io";

function socketHandler (socket : Socket) {
    console.log("new connection");
    socket.emit('welcome', "connection successful!");
}

export default socketHandler;