const express  = require("express")
const personalDetails = require("../controllers/personalDetails.ctrl")
const router = express.Router()

router.route("/create").get(personalDetails.submitDetails)

module.exports =  router