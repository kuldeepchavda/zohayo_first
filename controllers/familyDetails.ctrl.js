// controllers/familyDetails.ctrl.js
const FamilyDetails = require("../models/FamilyDetails");
const mongoose = require("mongoose")
// Handle saving family details
exports.submitDetails = async (req, res) => {
  try {
    const familyDetails = new FamilyDetails({
      ...req.body,
      uid: new mongoose.Types.ObjectId().toString(),
    });
    await familyDetails.save();
    res.status(200).send("Details saved successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Handle getting all family details
exports.getAllDetails = async (req, res) => {
  try {
    const details = await FamilyDetails.find();
    res.status(200).json(details);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
