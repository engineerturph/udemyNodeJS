const express = require("express");
const app = express();
const path = require("path");
const mainroute = require("./routes/mainroute");

app.use(mainroute);

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000);
