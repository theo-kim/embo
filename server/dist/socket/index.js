"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function socketHandler(socket) {
    console.log("new connection");
    socket.emit('welcome', "connection successful!");
}
exports.default = socketHandler;
//# sourceMappingURL=index.js.map