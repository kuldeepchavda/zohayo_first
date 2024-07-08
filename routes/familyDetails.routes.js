// routes/familyDetails.routes.js
const express = require("express");
const router = express.Router();
const familyDetailsController = require("../controllers/familyDetails.ctrl");

// Route to submit family details
router.route("/submitDetails").post(familyDetailsController.submitDetails);
// Route to get all family details
router.route("/submitDetails").get(familyDetailsController.getAllDetails);

module.exports = router;
