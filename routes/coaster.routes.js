const express = require("express")
const router = express.Router()
const Park = require("../models/park.model")
const Coaster = require("../models/coaster.model")

router.get("/new", (req, res) => {
  Park.find()
    .select("name")
    .then((parksList) => res.render("coasters/new-coaster", { parksList }))
})

module.exports = router
