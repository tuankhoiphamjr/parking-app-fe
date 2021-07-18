const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "dist")));
app.set("port", process.env.PORT || 8080);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

const server = app.listen(app.get("port"), function () {
  console.log("listening on port", server.address().port);
});
