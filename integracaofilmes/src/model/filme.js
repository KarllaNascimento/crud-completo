const mongoose = require("mongoose")

const filmeSchema = new mongoose.Schema({
   title: {
      type: String,
      require: true
   },

   description: {
      type: String,
      require: true
   },

   type: {
      type: String,
      require: true
   },

   available_on: {
      type: String,
      require: true
   },

   created_at: {
      type: Date,
      require: true,
      default: new Date
   }
})

module.exports = mongoose.model("filme", filmeSchema )