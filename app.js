const http = require ("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
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
});

server.listen(port);