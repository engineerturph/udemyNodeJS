const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
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
    res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); //asci sayilarini harfe ceviriyor.
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.setHeader("Location", "/");
        res.statusCode = 302;
        res.end();
      });
    }); //bunu koyunca req a event listener ekliyor ve sonraki isleme geciyor.
  }
  res.setHeader("Content-Type", "text/html"); //2. kez html headeri yollamaya calisiyor diye sikinti
  res.write("<html>"); //res.endden sonra bunu da yeniden yollayamazik
  res.write("<head><title>My First Page</title><head>");
  res.write("<body><h1>Hello world</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);

//start ozel digerlerini runla calistirirsin.
//Syntax error typo error
//Runtime error error when running
//Logical errors code dont work its supposed to be
//You can manipulate variables inside debugger
//res.endden sonra racon bitmistir

//Event loop
//Timers: Execute setTimeout
//Pending Callbacks: Execute I/O related callbacks that are deferred
//Poll: Retrieve new I/O events, execute their callbacks
//Check: Execute setImmediate() callbacks
//Close callbacks: Closes callbacks

//Once process.nextTick queue calisir sonra
//microtask(promise) sonra macrotask(setTimeout,setImmediate)
