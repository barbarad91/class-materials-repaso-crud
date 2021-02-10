const express = require("express")
const router = express.Router()
const Park = require("../models/park.model")

router.get("/new", (req, res) => res.render("parks/new-park"))
router.post("/new", (req, res, next) => {
  const { name, description, active } = req.body
  const activeValue = active === "on"

  Park.create({ name, description, active: activeValue })
    .then(res.redirect("/"))
    .catch((err) => next(err))
})

module.exports = router
