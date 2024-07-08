const OfficeAddress = require("../models/OfficeAddress");

exports.createOfficeAddress = async (req, res) => {
  try {
    const newAddress = new OfficeAddress(req.body);
    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getOfficeAddresses = async (req, res) => {
  try {
    const addresses = await OfficeAddress.find();
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOfficeAddressById = async (req, res) => {
  try {
    const address = await OfficeAddress.findById(req.params.id);
    if (address) {
      res.status(200).json(address);
    } else {
      res.status(404).json({ message: "Address not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateOfficeAddress = async (req, res) => {
  try {
    const address = await OfficeAddress.findById(req.params.id);
    if (address) {
      Object.assign(address, req.body);
      address.updatedOn.push({ timestamp: Date.now(), version: "v1" });
      await address.save();
      res.status(200).json(address);
    } else {
      res.status(404).json({ message: "Address not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteOfficeAddress = async (req, res) => {
  try {
    const address = await OfficeAddress.findByIdAndDelete(req.params.id);
    if (address) {
      res.status(200).json({ message: "Address deleted" });
    } else {
      res.status(404).json({ message: "Address not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
