const http = require("http");

const express = require("express");

const app = express();

const bodyP = require("body-parser");

app.use(bodyP.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  console.log("This always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In the middleware!");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Occc</button></form><h1>The "Add Product" Page<h1>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
}); //sadece POST ta calisir.

app.use((req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express</h1>");
});

app.listen(3000);
