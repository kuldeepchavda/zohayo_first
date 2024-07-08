const express  = require("express")
const personalDetails = require("../controllers/personalDetails.ctrl")
const router = express.Router()
router.route("/create").post(personalDetails.submitDetails)
router.route("get").get(personalDetails.getAllDetails)
module.exports =  router
