const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/SendDataToBackend")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

const schema = new mongoose.Schema({
  childFirstName: {
    type: String,
    required: true,
  },
  childLastName: {
    type: String,
    required: true,
  },
  placeOfBirth: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("newUserForm", schema);

module.exports = collection;
