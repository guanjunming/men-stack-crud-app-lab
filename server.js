require("dotenv").config();
const express = require("express");
const playersRouters = require("./src/routers/footballPlayer");
const connectDB = require("./src/db/db");

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", playersRouters);

app.listen(5001);
