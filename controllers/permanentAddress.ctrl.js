const PermanentAddress = require("../models/PermanentAddress");
const mongoose = require("mongoose");

// Handle saving permanent address
exports.submitDetails = async (req, res) => {
  try {
    const permanentAddress = new PermanentAddress({
      ...req.body,
      uid: new mongoose.Types.ObjectId().toString(),
    });
    await permanentAddress.save();
    res.status(200).send("Details saved successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Handle getting all permanent addresses
exports.getAllDetails = async (req, res) => {
  try {
    const details = await PermanentAddress.find();
    res.status(200).json(details);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Handle updating permanent address
exports.updateDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPermanentAddress = await PermanentAddress.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedPermanentAddress);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Handle deleting permanent address
exports.deleteDetails = async (req, res) => {
  try {
    const { id } = req.params;
    await PermanentAddress.findByIdAndDelete(id);
    res.status(200).send("Details deleted successfully");
  } catch (error) {
    res.status(404).send(error.message);
  }
};
