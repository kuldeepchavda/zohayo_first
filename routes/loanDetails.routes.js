const express = require("express");
const router = express.Router();
const loanDetailsCtrl = require("../controllers/loanDetails.ctrl");

router.post("/loan-details", loanDetailsCtrl.createLoanDetails);
router.get("/loan-details/:id", loanDetailsCtrl.getLoanDetails);
router.put("/loan-details/:id", loanDetailsCtrl.updateLoanDetails);
router.delete("/loan-details/:id", loanDetailsCtrl.deleteLoanDetails);

module.exports = router;
