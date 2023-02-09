const express = require("express");
const app = express();
const port = 9999;
const fs = require("fs");
const path = require("path");

app.use(express.static("images"));

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
	const directory = "./images/thumbnails";

	fs.readdir(directory, (err, files) => {
		if (err) throw err;

		res.render("home", {
			files: files.map((file) => ({
				path: file,
				thumbnail: `thumbnails/${file}`,
			})),
		});
	});
});

app.get("/:file", (req, res) => {
	res.render("item", { file: `full/${req.params.file}` });
});

app.listen(port, () => console.log(`listening on ${port}`));
