const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employmentDetailsSchema = new Schema({
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
  occupation: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  supervisorPhone: {
    type: String,
    required: false,
  },
  experienceCurrentJob: {
    years: {
      type: Number,
      required: true,
    },
    months: {
      type: Number,
      required: true,
    },
  },
  totalExperienceJob: {
    years: {
      type: Number,
      required: true,
    },
    months: {
      type: Number,
      required: true,
    },
  },
  salary: {
    type: Number,
    required: true,
  },
});

const EmploymentDetails = mongoose.model(
  "EmploymentDetails",
  employmentDetailsSchema
);

module.exports = EmploymentDetails;
