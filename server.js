"use strict";

const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes")(router);
app.use("/api", router);
app.get("/", (request, response) => {
  response.send("Hello, Nhiên!");
});
app.listen(port);

console.log(`Server Runs on ${port}`);
