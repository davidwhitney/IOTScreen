import express = require("express");
import bodyParser = require("body-parser");
import { AddressInfo } from "net";
import {Express} from "express";

const app: Express = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (_req, res) => {
  res.send("IOTScreen");
});

const server: any = app.listen(3000, () => {
    const address: AddressInfo = server.address() as AddressInfo;
    console.log("Listening on port %s", address.port);
});
