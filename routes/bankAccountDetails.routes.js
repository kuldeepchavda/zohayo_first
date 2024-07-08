const express = require("express");
const router = express.Router();
const bankAccountDetailsCtrl = require("../controllers/bankAccountDetails.ctrl");

router.post(
  "/create",
  bankAccountDetailsCtrl.createBankAccountDetails
);
router.get(
  "/get/:id",
  bankAccountDetailsCtrl.getBankAccountDetails
);
router.put(
  "/update/:id",
  bankAccountDetailsCtrl.updateBankAccountDetails
);
router.delete(
  "/delete/:id",
  bankAccountDetailsCtrl.deleteBankAccountDetails
);

module.exports = router;
