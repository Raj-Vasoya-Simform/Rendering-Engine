const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layout/",
    defaultLayout: "main",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

const indexData = require("./routes/index");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexData.routes);

app.use((req, res, next) => {
  res.status(200).render("index", { pageTitle: "Handlebar" });
});

app.listen(3000);
