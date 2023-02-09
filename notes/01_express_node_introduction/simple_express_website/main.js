const express = require("express");
const app = express();
const port = 9999;
const path = require("path");

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./index.html")));

app.get("/1", (req, res) =>
	res.sendFile(path.join(__dirname, "./images/cirno1.jpg"))
);

app.get("/2", (req, res) =>
	res.sendFile(path.join(__dirname, "./images/cirno2.png"))
);

app.get("/3", (req, res) =>
	res.sendFile(path.join(__dirname, "./images/cirno3.png"))
);

app.listen(port, () => console.log(`App listening on port ${port}`));
