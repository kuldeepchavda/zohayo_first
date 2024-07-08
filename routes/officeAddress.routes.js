const express = require("express");
const router = express.Router();
const officeAddressController = require("../controllers/officeAddress.ctrl");

router.post("/create", officeAddressController.createOfficeAddress);
router.get("/get", officeAddressController.getOfficeAddresses);
router.get("/get/:id", officeAddressController.getOfficeAddressById);
router.put("/update/:id", officeAddressController.updateOfficeAddress);
router.delete("/delete/:id", officeAddressController.deleteOfficeAddress);
module.exports = router;