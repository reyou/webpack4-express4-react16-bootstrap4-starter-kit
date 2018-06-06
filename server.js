const appPort = 9000;
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
app.use(express.static("./"));
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(appPort, function() {
  console.log("Web started at", "http://localhost:" + appPort);
});
