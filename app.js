const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

//Set a default templating engine
app.set("view engine", "ejs");
//Set a default views folder
app.set("views", "views");

app.use(bodyParser.urlencoded({ extende: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.render("404", { pageTitle: "Page not found" , path : '404'});
});

app.listen(8000);
