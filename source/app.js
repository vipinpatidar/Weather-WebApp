const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

// seting view engine as a templete
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
console.log(templatePath);

app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weathercard");
});

app.get("*", (req, res) => {
  res.status(404).render("404err", {
    errorMsg: "Oops! Page not found :(",
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("listing on port " + port);
});
