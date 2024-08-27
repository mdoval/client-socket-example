import { io } from "socket.io-client";

export function server() {
    const socket = io("ws://localhost:8080/", {});

    socket.on("connect", () => {
      console.log(`connect ${socket.id}`);
    });
  
    socket.on("disconnect", () => {
      console.log(`disconnect`);
    });

    return socket
}

export function enviar() {
    const srv = server()
    srv.emit("test", "Mensaje de Testing", (response: any) => {
        console.log(response);
      });
}