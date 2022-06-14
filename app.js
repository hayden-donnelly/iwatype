const http = require ("http");
const fs = require("fs");
const port = 3000;

const quotes = ["Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend",
                "Without music, life would be a mistake.",
                "Man is abandonned upon the earth, condemned to be free."]

const server = http.createServer((req, res) => {
    if(req.url == "new-quote") {
        res.writeHead(200, {"Content-Type": "text/txt"});
        res.write(quotes[parseInt(Math.random() * (quotes.length-1), 10)])
        res.end();
    } else {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile("index.html", (err, dat) => {
            if(err) {
                res.writeHead(404);
                res.write("Error: File Not Found");
            } else {
                res.write(dat);
            }
            res.end();
        });
    }
});

server.listen(port);