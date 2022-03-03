const express = require("express");
const router = express.Router();

const rideControllers = require("./ride/ride");

const User = require("../models/user");

router.use("/auth", require("./auth"));

router.post("/ride/start", rideControllers.startRide);
router.post("/ride/end", rideControllers.endRide);
router.post("/ride/update", rideControllers.updateRide);

router.get("/profile", function (req, res) {
  console.log(req);
  User.findOne({ email: req.session.passport.user.email })
    .lean()
    .exec((err, user) => {
      if (err) console.log(err);
      if (user) res.status(200).send(user);
      else {
        res.status(404).send();
      }
    });
});

module.exports = router;
