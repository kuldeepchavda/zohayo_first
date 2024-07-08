const express = require("express");
const router = express.Router();
const employmentDetailsController = require("../controllers/employmentDetails.ctrl");

// Create new employment details
router.post("/create", employmentDetailsController.submitDetails);

// Get all employment details
router.get("/get", employmentDetailsController.getAllDetails);

// Update employment details
router.put("update/:id", employmentDetailsController.updateDetails);

// Delete employment details
router.delete("delete/:id", employmentDetailsController.deleteDetails);

module.exports = router;
