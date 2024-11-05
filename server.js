require("dotenv").config();
const express = require("express");
const playersRoutes = require("./src/routes/footballPlayer");
const connectDB = require("./src/db/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", playersRoutes);

connectDB();
app.listen(process.env.PORT);
