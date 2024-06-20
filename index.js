const dotenv = require("dotenv");
const express = require("express");
dotenv.config();

const router = require("./app/router");

const app = express();

app.set("view engine", "ejs");
app.set("views", "app/views");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use((req, res) => {
  res.status(404).render("404", { css: "404" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
