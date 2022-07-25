const path = require("path");
const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  //   console.log("In another middleware!");
  //   res.send("<h1>Hello from Express</h1>");
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
}); //get felan her zaman yazilan pathin aynisini arar
//basta / varsa calistirmaz

module.exports = router;
