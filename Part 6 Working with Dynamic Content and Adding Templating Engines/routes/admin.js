const path = require("path");
const express = require("express");

const mainDir = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  //   console.log("In the middleware!");
  //   res.send(
  //     '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Occc</button></form><h1>The "Add Product" Page<h1>'
  //   );
  res.sendFile(path.join(mainDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
}); //sadece POST ta calisir.

module.exports = router;
