const mongoose = require("mongoose")
const Schema = mongoose.Schema

const parkSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    active: Boolean,
  },
  { timestamps: true }
)

const Park = mongoose.model("Park", parkSchema)
module.exports = Park
