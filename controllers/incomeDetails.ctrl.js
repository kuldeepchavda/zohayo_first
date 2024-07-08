const IncomeDetails = require("../models/IncomeDetails");
const mongoose = require("mongoose");

// Handle saving income details
exports.submitDetails = async (req, res) => {
  try {
    const incomeDetails = new IncomeDetails({
      ...req.body,
      uid: new mongoose.Types.ObjectId().toString(),
    });
    await incomeDetails.save();
    res.status(200).send("Details saved successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Handle getting all income details
exports.getAllDetails = async (req, res) => {
  try {
    const details = await IncomeDetails.find();
    res.status(200).json(details);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Handle updating income details
exports.updateDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedIncomeDetails = await IncomeDetails.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedIncomeDetails);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Handle deleting income details
exports.deleteDetails = async (req, res) => {
  try {
    const { id } = req.params;
    await IncomeDetails.findByIdAndDelete(id);
    res.status(200).send("Details deleted successfully");
  } catch (error) {
    res.status(404).send(error.message);
  }
};
