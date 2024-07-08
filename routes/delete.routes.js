const express = require("express");
const router = express.Router();

const {
    deleteAllTesters,
    deleteTesterByEmail,
} = require('../controllers/delete.ctrl');


router.delete("/deleteAll", deleteAllTesters); 
router.delete("/:email", deleteTesterByEmail); 

router.all('*', (req, res) => {
    res.status(404).json({
      status: "404",
      error: "Delete route not found"
    });
  });

module.exports = router;