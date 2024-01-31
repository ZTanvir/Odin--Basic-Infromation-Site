const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const host = "127.0.0.1";
const port = 8000;

app.use(morgan("dev"));
const unknownEndPoint = (req, res) => {
  res.sendFile(path.join(__dirname, "pages/404.html"));
};

app.get("/", (req, res) => {
  console.log("File path-", path.join(__dirname, "pages/index.html"));
  res.sendFile(path.join(__dirname, "pages/index.html"));
});

app.get("/visit", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/visit.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/about.html"));
});

app.use(unknownEndPoint);

app.listen(port, () => {
  console.log(`Server is running on https"://${host}:${port}`);
});
