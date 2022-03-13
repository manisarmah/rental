const mongoose = require("mongoose");

const cycleSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("cycles", cycleSchema);
