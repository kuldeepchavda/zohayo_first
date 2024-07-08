// controllers/personalDetails.ctrl.js
const PersonalDetails = require("../models/PersonalDetails");
const mongoose = require("mongoose")
// Handle saving personal details
exports.submitDetails = async (req, res) => {
  try {
    const personalDetails = new PersonalDetails({
      ...req.body,
      uid: new mongoose.Types.ObjectId().toString(),
    });
    await personalDetails.save();
    res.status(200).send("Details saved successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Handle getting all personal details
exports.getAllDetails = async (req, res) => {
  try {
    const details = await PersonalDetails.find();
    res.status(200).json(details);
  } catch (err) {
    res.status(500).send(err.message);
  }
};