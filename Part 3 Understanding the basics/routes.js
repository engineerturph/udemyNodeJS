const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter message</title><head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
      console.log(Buffer.concat(body)[0]);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); //asci sayilarini harfe ceviriyor.
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.setHeader("Location", "/");
        res.statusCode = 302;
        res.end();
      });
    }); //bunu koyunca req a event listener ekliyor ve sonraki isleme geciyor.
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title><head>");
  res.write("<body><h1>Hello world</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;

// module.exports = {
//     handler:requestHandler,
//     someText: 'asdfasdfasd',
// }
