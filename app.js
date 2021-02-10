require("dotenv").config()

const express = require("express")
const app = express()

// DB, middlewares, locals & debug
require("./configs/mongoose.config")
require("./configs/preprocessor.config")(app)
require("./configs/middlewares.config")(app)
require("./configs/locals.config")(app)
require("./configs/debug.config")
require("./utils")
// Routes index
require("./routes")(app)

module.exports = app
