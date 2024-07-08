const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  version: { type: String, default: "v1" },
});

const personalDetailsSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  firstName: String,
  middleName: String,
  lastName: String,
  phone: String,
  email: String,
  dateOfBirth: String,
  fatherFirstName: String,
  fatherMiddleName: String,
  fatherLastName: String,
  motherFirstName: String,
  motherMiddleName: String,
  motherLastName: String,
  nationality: String,
  aadhaarNo: String,
  pan: String,
  gender: String,
  religion: String,
  maritalStatus: String,
  residentialStatus: String,
  physicallyDisabled: String,
  createdOn: { type: Date, default: Date.now},
  updatedOn: [updateSchema],
});

const PersonalDetails = mongoose.model(
  "PersonalDetails",
  personalDetailsSchema
);

module.exports = PersonalDetails;
