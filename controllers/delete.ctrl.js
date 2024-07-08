const Tester = require('../models/Tester');


exports.deleteAllTesters = async (req, res) => {
    try 
    {
      await Tester.deleteMany({})
      res.status(200).send({ statusId: 200, message: "Testers deleted." });
    } catch (err) {
      res.status(500).send({ statusId: 500, message: err.message });
    }
  };

  
  exports.deleteTesterByEmail = async (req, res) => {
    try {
      const result = await Tester.deleteOne({ email: req.params.email });
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Tester not found' });
      }
      res.status(200).json({ message: 'Tester deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



