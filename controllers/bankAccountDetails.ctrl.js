const BankAccountDetails = require("../models/BankAccountDetails");

exports.createBankAccountDetails = async (req, res) => {
  try {
    const bankAccountDetails = new BankAccountDetails(req.body);
    await bankAccountDetails.save();
    res.status(201).send(bankAccountDetails);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getBankAccountDetails = async (req, res) => {
  try {
    const bankAccountDetails = await BankAccountDetails.findById(req.params.id);
    if (!bankAccountDetails) {
      return res.status(404).send();
    }
    res.send(bankAccountDetails);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateBankAccountDetails = async (req, res) => {
  try {
    const bankAccountDetails = await BankAccountDetails.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!bankAccountDetails) {
      return res.status(404).send();
    }
    bankAccountDetails.updatedOn.push({ version: req.body.version || "v1" });
    await bankAccountDetails.save();
    res.send(bankAccountDetails);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteBankAccountDetails = async (req, res) => {
  try {
    const bankAccountDetails = await BankAccountDetails.findByIdAndDelete(
      req.params.id
    );
    if (!bankAccountDetails) {
      return res.status(404).send();
    }
    res.send(bankAccountDetails);
  } catch (error) {
    res.status(500).send(error);
  }
};
