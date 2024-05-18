import { WebSocketServer } from "ws";
import si from "systeminformation";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (ws) {
    ws.on("message", function (data) {
        console.log("received: %s", data);
    });

    setInterval(async () => {
        const cpuTemp = JSON.stringify(await si.currentLoad());
        ws.send(cpuTemp);
      }, 1000);
});