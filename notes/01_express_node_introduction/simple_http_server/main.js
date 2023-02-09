const http = require("http");
const hostname = "127.0.0.1";
const port = 9999;

const fs = require("fs");

const server = http.createServer((req, res) => {
	fs.readFile("./cirno.png", (error, data) => {
		if (error) {
			res.writeHead(500, { "Content-type": "text/plain" });
			res.end(error);
		} else {
			res.writeHead(200, { "Content-Type": "image/png" });
			res.end(data);
		}
	});
});

server.listen(port, hostname, () =>
	console.log(`Server running at http://${hostname}:${port}`)
);
