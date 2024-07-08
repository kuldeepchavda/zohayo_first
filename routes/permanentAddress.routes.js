const express = require("express");
const router = express.Router();
const permanentAddressController = require("../controllers/permanentAddress.ctrl");

// Create new permanent address
router.post("/create", permanentAddressController.submitDetails);

// Get all permanent addresses
router.get("/get", permanentAddressController.getAllDetails);

// Update permanent address
router.put("update/:id", permanentAddressController.updateDetails);

// Delete permanent address
router.delete("delete/:id", permanentAddressController.deleteDetails);

module.exports = router;
