const express = require("express");
const app = express();
const port = process.env.port || 8000;

app.use(express.static("./dist"));

app.listen(port, () => console.log("ready"));