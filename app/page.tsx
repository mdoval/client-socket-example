'use client'
/*import { io } from "socket.io-client";*/

import { enviar } from "./lib/server";

export default function Home() {
  /*const socket = io("ws://localhost:8080/", {});

  socket.on("connect", () => {
    console.log(`connect ${socket.id}`);
  });

  socket.on("disconnect", () => {
    console.log(`disconnect`);
  });

  setInterval(() => {
    const start = Date.now();
    socket.emit("ping", () => {
      console.log(`pong (latency: ${Date.now() - start} ms)`);
    });
  }, 1000);
*/

  enviar()

  return (
    <div className="h-full w-full flex items-center justify-center">
      <h1>Client</h1>
    </div>
  );
}
