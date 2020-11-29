// to check local node.js server
const express = require("express");
const app = express();

const PORT = 4000;

app.use("/img", express.static("./img"));
app.use("/model", express.static("./model"));
app.use("/test_model", express.static("./test_model"));
app.use("/css", express.static("./css"));
app.use("/js", express.static("./js"));

function handleListening() {
  console.log(`listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.sendFile(__dirname + "/index.html");
}

app.get("/", handleHome);

app.listen(4000, handleListening);
