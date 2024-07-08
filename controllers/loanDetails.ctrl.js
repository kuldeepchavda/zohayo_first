const LoanDetails = require("../models/LoanDetails");

exports.createLoanDetails = async (req, res) => {
  try {
    const loanDetails = new LoanDetails(req.body);
    await loanDetails.save();
    res.status(201).send(loanDetails);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getLoanDetails = async (req, res) => {
  try {
    const loanDetails = await LoanDetails.findById(req.params.id);
    if (!loanDetails) {
      return res.status(404).send();
    }
    res.send(loanDetails);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateLoanDetails = async (req, res) => {
  try {
    const loanDetails = await LoanDetails.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!loanDetails) {
      return res.status(404).send();
    }
    loanDetails.updatedOn.push({ version: req.body.version || "v1" });
    await loanDetails.save();
    res.send(loanDetails);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteLoanDetails = async (req, res) => {
  try {
    const loanDetails = await LoanDetails.findByIdAndDelete(req.params.id);
    if (!loanDetails) {
      return res.status(404).send();
    }
    res.send(loanDetails);
  } catch (error) {
    res.status(500).send(error);
  }
};
