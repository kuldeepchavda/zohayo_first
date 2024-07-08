const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UpdatedOnSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  version: { type: String, default: "v1" },
});

const LoanDetailsSchema = new Schema({
  uid: { type: String, required: true },
  loanPurpose: { type: String, required: true },
  totalRunningLoans: { type: Number, required: true },
  totalLoanAmount: { type: Number, required: true },
  totalEmiAmount: { type: Number, required: true },
  createdOn: { type: Date, default: Date.now },
  updatedOn: [UpdatedOnSchema],
});

module.exports = mongoose.model("LoanDetails", LoanDetailsSchema);