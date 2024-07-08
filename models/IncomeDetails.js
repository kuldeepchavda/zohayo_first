const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const updatedOnSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  version: {
    type: String,
    default: "v1",
  },
});

const incomeDetailsSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  updatedOn: [updatedOnSchema],
  noOfIncomeStreams: {
    type: Number,
    required: true,
  },
  incomeSources: [
    {
      source: String,
      income: Number,
    },
  ],
});

const IncomeDetails = mongoose.model("IncomeDetails", incomeDetailsSchema);

module.exports = IncomeDetails;
