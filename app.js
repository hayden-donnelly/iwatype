const express = require("express");
const { readFile } = require("fs").promises;
const port = 3000;
const app = express();

const quotes = ["Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend",
                "Without music, life would be a mistake.",
                "Man is abandonned upon the earth, condemned to be free."]

app.get("/", async (req, res) => {
    res.send(await readFile("index.html", "utf8"));
});

app.get("/new-quote", async (req, res) => {
    console.log(parseInt(Math.random() * quotes.length, 10));
    res.send(quotes[parseInt(Math.random() * quotes.length, 10)]);
});

app.listen(port, () => console.log("App available on http://localhost:3000"));