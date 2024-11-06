const mongoose = require("mongoose");

const footballPlayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  position: { type: String, required: true },
});

module.exports = mongoose.model("FootballPlayer", footballPlayerSchema);
