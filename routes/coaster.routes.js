const express = require("express")
const router = express.Router()
const Park = require("../models/park.model")
const Coaster = require("../models/coaster.model")

router.get("/new", (req, res, next) =>
  Park.find()
    .select("name")
    .then((parksList) => res.render("coasters/new-coaster", { parksList }))
    .catch((err) => next(err))
)

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
    .then(res.redirect("/coasters"))
    .catch((err) => next(err))
})

router.get("/", (req, res, next) =>
  Coaster.find()
    .populate("park")
    .then((coastersList) =>
      res.render("coasters/coasters-index", { coastersList })
    )
    .catch((err) => next(err))
)

router.get("/delete", (req, res, next) =>
  Coaster.findByIdAndRemove(req.query.id)
    .then(res.redirect("/coasters"))
    .catch((err) => next(err))
)

router.get("/edit", (req, res, next) => {
  Park.find()
    .select("name")
    .then((parksList) => {
      // res.render("coasters/new-coaster", { parksList })})
      Coaster.findById(req.query.id).then((coaster) =>
        res.render("coasters/coaster-edit", { coaster, parksList })
      )
    })
    .catch((err) => next(err))
})

router.post("/edit", (req, res, next) => {
  const { name, description, inversions, length, active, park } = req.body
  const activeValue = active === "on"
  const updatedPark = park && park != "Seleccionar" ? park : undefined
  Coaster.findByIdAndUpdate(
    req.query.id,
    {
      name,
      description,
      inversions,
      length,
      active: activeValue,
      park: updatedPark,
    },
    { omitUndefined: true }
  )
    .then(res.redirect(`/coasters/${req.query.id}`))
    .catch((err) => next(err))
})

router.get("/:id", (req, res, next) =>
  Coaster.findById(req.params.id)
    .populate("park")
    .then((coaster) => {
      console.log(coaster)
      res.render("coasters/coaster-details", coaster)
    })
    .catch((err) => next(err))
)

module.exports = router
