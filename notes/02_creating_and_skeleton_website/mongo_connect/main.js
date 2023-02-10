require("dotenv").config();

const mongoose = require("mongoose");
const dbURI = `mongodb+srv://byme:${process.env.PASS}@cluster0.gfn4uid.mongodb.net/?retryWrites=true&w=majority`;

async function main() {
	await mongoose.connect(dbURI);

	console.log("connected to db");
}

mongoose.set("strictQuery", false);

main().catch((error) => console.log(error));
