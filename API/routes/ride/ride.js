const Ride = require("../models/ride");

exports.startRide = async (req, res) => {
  try {
    const { userId, cycleId } = req.body;

    const newRide = await Ride.create({
      user: userId,
      cycle: cycleId,
      rideStartTime: new Date(),
      rideStatus: "ACTIVE",
    });

    return res.status(201).json({
      status: "success",
      message: "Ride started successfully",
      data: newRide,
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.endRide = async (req, res) => {
  try {
    const rideId = req.body.rideId;
    const ride = await Ride.findOne({ _id: rideId });
    if (!ride) {
      return res.status(400).json({
        status: "fail",
        message: "No ride found with the given id",
      });
    }

    if (ride.rideStatus === "COMPLETED") {
      return res.status(400).json({
        status: "fail",
        message: "Ride already ended previously",
      });
    }

    if (ride.rideStatus === "ACTIVE") {
      ride.rideEndTime = new Date();
      ride.rideStatus = "COMPLETED";
      await ride.save();
      return res.status(200).json({
        status: "success",
        message: "Ride ended successfully",
        data: ride,
      });
    }
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updatePaymentStatus = async (req, res) => {
  try {
    const ride = await Ride.findOne({ _id: req.body.rideId });
    if (!ride) {
      return res.status(400).json({
        status: "fail",
        message: "No ride found with the given id",
      });
    }

    ride.paymentStatus = req.body.paymentStatus;
    await ride.save();

    return res.status(200).json({
      status: "success",
      message: "payment status updated",
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
