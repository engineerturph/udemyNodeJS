const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/views", "/add-product.html"));
});

router.get("/users", function (req, res, next) {
  res.sendFile(path.join(__dirname, "/views", "/shop.html"));
});

app.listen(3000);

module.exports = router;
