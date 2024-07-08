const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const updatedOnSchema = new Schema({
  timestamp: { type: Date, default: Date.now },
  version: { type: String, default: "v1" },
});

const officeAddressSchema = new Schema({
  uid: { type: String, required: true },
  pinCode: { type: String, required: true },
  addressLineOne: { type: String, required: true },
  addressLineTwo: { type: String },
  state: { type: String, required: true },
  city: { type: String, required: true },
  district: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  updatedOn: [updatedOnSchema],
});

module.exports = mongoose.model("OfficeAddress", officeAddressSchema);
