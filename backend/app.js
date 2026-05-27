const http = require("node:http");
const HOST = "0.0.0.0";
const PORT = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Effective Mobile!");
});

server.listen(PORT, HOST, () => {
    console.log("Server running on http://0.0.0.0:8080");
});