require("dotenv").config()

const express = require("express")
const app = express()

// DB, middlewares, locals & debug
require("./configs/mongoose.config")
require("./configs/middlewares.config")(app)
require("./configs/preprocessor.config")(app)
require("./configs/locals.config")(app)
require("./configs/debug.config")

const hbs = require("hbs")
hbs.registerHelper("trimString", (passedString, stringLength) =>
  passedString.length <= stringLength
    ? passedString
    : `${passedString.substring(0, stringLength)}...`
)
// Routes index
require("./routes")(app)

module.exports = app
