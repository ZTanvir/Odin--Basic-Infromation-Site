const http = require("http");
const fs = require("fs/promises");
const host = "127.0.0.1";
const port = 8000;

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/") {
    try {
      const content = await fs.readFile(__dirname + "/index.html");
      res.statusCode = 200;
      res.end(content);
    } catch (error) {
      res.writeHead(500);
      res.end(error);
    }
  } else if (req.url == "/about") {
    try {
      const content = await fs.readFile(__dirname + "/about.html");
      res.statusCode = 200;
      res.end(content);
    } catch (error) {
      res.writeHead(500);
      res.end(error);
    }
  } else if (req.url == "/visit") {
    try {
      const content = await fs.readFile(__dirname + "/visit.html");
      res.statusCode = 200;
      res.end(content);
    } catch (error) {
      res.writeHead(500);
      res.end(error);
    }
  } else {
    try {
      const content = await fs.readFile(__dirname + "/404.html");
      res.statusCode = 200;
      res.end(content);
    } catch (error) {
      res.writeHead(500);
      res.end(error);
    }
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on https"://${host}:${port}`);
});
