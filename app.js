const { Console } = require("console");
const express = require("express");
const { readFile } = require("fs").promises;
const port = 3000;
const app = express();
const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./iwatype.db");
let query = "SELECT * FROM Quotes ORDER BY RANDOM() LIMIT 1;";

app.get("/", async (req, res) => {
    res.send(await readFile("index.html", "utf8"));
});

app.get("/new-quote", async (req, res) => {
    db.all(query, [], (err, rows) => {
        if (err) {
          throw err;
        }
        res.send(rows[0].Text);
    });
});

app.listen(port, () => console.log("App available on http://localhost:3000"));