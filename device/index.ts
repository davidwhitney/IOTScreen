import express = require("express");
import bodyParser = require("body-parser");
import { AddressInfo } from "net";
import { Express } from "express";
import WebSocket = require("ws");
import ImageService from "./ImageService";
import ImageHandler from "./ImageHandler";

const imageService: ImageService = new ImageService();
const imageHandler: ImageHandler = new ImageHandler();

const app: Express = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", express.static(__dirname + "/public", { index: "index.html" }));
app.use("/content", imageHandler.handle);

const server: any = app.listen(3000, () => {
    const address: AddressInfo = server.address() as AddressInfo;
    console.log("Listening on port %s", address.port);
});

const wss: WebSocket.Server = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws: WebSocket) => {
  ws.on("message", (message: WebSocket.Data) => console.log("received: %s", message));
  setInterval(() => { ws.send(imageService.getLatestImage()); }, 1000);
});