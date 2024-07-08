const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const permanentAddressSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  updatedOn: [
    {
      timestamp: {
        type: Date,
        default: Date.now,
      },
      version: {
        type: String,
        default: "v1",
      },
    },
  ],
  pinCode: {
    type: String,
    required: true,
  },
  addressLineOne: {
    type: String,
    required: true,
  },
  addressLineTwo: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
});

const PermanentAddress = mongoose.model(
  "PermanentAddress",
  permanentAddressSchema
);

module.exports = PermanentAddress;
