const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  cycle: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cycles",
  },
  rideStartTime: {
    type: Date,
    default: () => new Date(),
  },
  rideEndTime: {
    type: Date,
  },
  paymentStatus: {
    type: String,
    enum: ["PAID", "UNPAID"],
    default: "UNPAID",
  },
  paymentAmount: {
    type: String,
  },
  rideStatus: {
    type: String,
    enum: ["ACTIVE", "COMPLETED"],
  },
});

module.exports = mongoose.model("rides", rideSchema);
