const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appoinmentSchema = new Schema({

      name: {
            type: String,
            require: true
      },

      mobileNumber: {
        type: number,
        require: true
      },

      nic: {
            type: String,
            require: true
      },

      dogID: {
            type: String,
            require: true
      },

      fee: {
            type: String,
            require: true
      },

      date: {
        type: String,
        require: true
      },

      time: {
        type: String,
        require: true
      },

      reason: {
        type: String,
        require: true
     },

})

const Appoinment = mongoose.model("Appoinment", appoinmentSchema);

module.exports = Appoinment;