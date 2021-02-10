const express = require("express")
const router = express.Router()
const Park = require("../models/park.model")
const Coaster = require("../models/coaster.model")

router.get("/new", (req, res, next) => {
  Park.find()
    .select("name")
    .then((parksList) => res.render("coasters/new-coaster", { parksList }))
    .catch((err) => next(err))
})

router.post("/new", (req, res, next) => {
  const { name, description, inversions, length, active, park } = req.body
  const activeValue = active === "on"

  Coaster.create({
    name,
    description,
    inversions,
    length,
    active: activeValue,
    park,
  })
    .then(res.redirect("/"))
    .catch((err) => next(err))
})

router.get("/", (req, res) => res.render("coasters/coasters-index"))
module.exports = router
