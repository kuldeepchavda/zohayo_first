const EmploymentDetails = require("../models/EmploymentDetails");
const mongoose = require("mongoose");

// Handle saving employment details
exports.submitDetails = async (req, res) => {
  try {
    const employmentDetails = new EmploymentDetails({
      ...req.body,
      uid: new mongoose.Types.ObjectId().toString(),
    });
    await employmentDetails.save();
    res.status(200).send("Details saved successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Handle getting all employment details
exports.getAllDetails = async (req, res) => {
  try {
    const details = await EmploymentDetails.find();
    res.status(200).json(details);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Handle updating employment details
exports.updateDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmploymentDetails = await EmploymentDetails.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedEmploymentDetails);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Handle deleting employment details
exports.deleteDetails = async (req, res) => {
  try {
    const { id } = req.params;
    await EmploymentDetails.findByIdAndDelete(id);
    res.status(200).send("Details deleted successfully");
  } catch (error) {
    res.status(404).send(error.message);
  }
};
