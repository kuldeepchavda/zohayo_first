const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UpdatedOnSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  version: { type: String, default: "v1" },
});

const BankAccountDetailsSchema = new Schema({
  uid: { type: String, required: true },
  ifsc: { type: String, required: true },
  bankAccountNo: { type: String, required: true },
  bankName: { type: String, required: true },
  branch: { type: String, required: true },
  city: { type: String, required: true },
  district: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  updatedOn: [UpdatedOnSchema],
});

module.exports = mongoose.model("BankAccountDetails", BankAccountDetailsSchema);
