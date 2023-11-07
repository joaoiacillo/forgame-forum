require("dotenv").config();

const express = require("express");
const path = require("path");
const db = require("./db");

const port = 8080;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/api/", require("./routes/api"));

app.get("/", (req, res) => {
    res.render("index");
});

db.authenticate().then(() => db.logger.log("Database has just been connected.", { db: process.env.DB_NAME, user: process.env.DB_USER }));

app.listen(port, () => {
    console.log("The server is now running.");
});
