const path = require("path");
const express = require("express");
const bodyP = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyP.urlencoded({ extended: false }));

app.use("/admin", adminRoutes); //ayrica /admin routesini de ister
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404error.html"));
  //status ya da setHeader ekleri ile kombine edebilirsin
});

app.listen(3000);
