const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  //   console.log("asdfa");
  res.send(
    `<head><link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon"></head><p>userpage</p>`
  );
});

app.use("/", (req, res, next) => {
  res.send(
    `<head><link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon"></head><p>dummytest</p>`
  );
  next();
});

app.use((req, res, next) => {
  if (req.url.includes("/favicon.ico")) {
    console.log("asd");
    return next(); // specify return so the next console.log won't be executed
  }
  console.log("asdfa");
});

app.listen(3000);
