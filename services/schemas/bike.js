const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bikeSchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  price: {
    type: String,
  },
  availability: {
    type: Boolean,
    default: true,
  },
  timeStartRent: {
    type: Number,
  },
  timeEndRent: {
    type: Number,
  },
});

const Bike = model('bike', bikeSchema);

module.exports = Bike;