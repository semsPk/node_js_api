// MQTT broker
const mosca = require("mosca");
const express = require("express");
const app = express();

var settings = { port: 1234, host: "0.0.0.0" };
var broker = new mosca.Server(settings);

app.get("/test", (req, res) => res.send("app is working!"));

const port = 8080;

broker.on("ready", () => {
  console.log("!Broker is ready!");
});

app.listen(port, () => console.log("live at ", port));
