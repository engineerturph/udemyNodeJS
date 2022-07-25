const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/" || url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Send a message</title><head>");
    res.write(
      '<body><p>Welcome to my Page</p><ul><li>User1</li></ul><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); //asci sayilarini harfe ceviriyor.
      const message = parsedBody.split("=")[1];
      console.log(message);
      res.setHeader("Location", "/");
      res.statusCode = 302;
      return res.end();
    });
  }
});

server.listen(3000);
