import express = require("express");
import bodyParser = require("body-parser");
import { AddressInfo } from "net";
import { Express } from "express";
import WebSocket = require("ws");

const app: Express = express();
app.use(express.static("public"));
app.use("/", express.static(__dirname + "/public", { index: "index.html" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server: any = app.listen(3000, () => {
    const address: AddressInfo = server.address() as AddressInfo;
    console.log("Listening on port %s", address.port);
});

const wss: WebSocket.Server = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws: WebSocket) => {
  ws.on("message", (message: WebSocket.Data) => {
    console.log("received: %s", message);
  });

  ws.send("something");
});