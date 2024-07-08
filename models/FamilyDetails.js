// models/FamilyDetails.js
const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  version: { type: String, default: "v1" },
});

const dependentSchema = new mongoose.Schema({
  relation: String,
  firstName: String,
  middleName: String,
  lastName: String,
  dob: String,
  phone: String,
});

const familyDetailsSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  familyType: String,
  totalFamilyMembers: Number,
  totalDependentMembers: Number,
  dependentMembers: [dependentSchema],
  createdOn: { type: Date, default: Date.now },
  updatedOn: [updateSchema],
});

const FamilyDetails = mongoose.model("FamilyDetails", familyDetailsSchema);

module.exports = FamilyDetails;
