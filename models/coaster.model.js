const mongoose = require("mongoose")
const Schema = mongoose.Schema

const coasterSchema = new Schema(
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
    inversions: Number,
    length: Number,
    active: Boolean,
    park: {
      type: Schema.Types.ObjectId,
      ref: "Park",
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Coaster", coasterSchema)
