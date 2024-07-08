const express = require("express");
const router = express.Router();
const incomeDetailsController = require("../controllers/incomeDetails.ctrl");

// Create new income details
router.post("/create", incomeDetailsController.submitDetails);

// Get all income details
router.get("/", incomeDetailsController.getAllDetails);

// Update income details
router.put("/update/:id", incomeDetailsController.updateDetails);

// Delete income details
router.delete("/delete/:id", incomeDetailsController.deleteDetails);

module.exports = router;
