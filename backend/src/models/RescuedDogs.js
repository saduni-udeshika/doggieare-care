const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rescuedDogSchema = new Schema({

    
  dogID: {
    type: String,
  },

  dogName: {
     type: String,
  },

  registerdDate:{
    type: Date,
    require: true
  },

  rescuerName: {
    type: String,
  },

  rescuerContactNo: {
    type: Number,
    require: true
   
  },

  dogImage: {
    type: String,
  },

  description:{
    type: String,
    require: true
  },

  
  weight: {
    type: String,
  },

  
  dogColour:{
    type: String,
  },

  Gender: {
    type: String,
  },

  Age: {
    type: String,
  },

  bloodGroup: {
    type: String,
  },

  medicine: {
    type: String,
  },

  labTests: {
    type: String,
  },

  doctor: {
    type: String,
  },

  disabilities:{
    type: String,
  },
  
  disease: {
    type: String,
  },

  perspectivePetParents:{
    type: String,
    require: true
  },

  contactNo:{
    type: Number,
    require: true
  },

  buildingNo:{
    type: String,
    require: true
  },

   street:{
    type: String,
    require: true
   },

   city:{
    type: String,
    require: true
   },

   adoptDate:{
    type: Date,
    require: true
   }
})

const RescuedDog = mongoose.model("RescuedDog", rescuedDogSchema);

module.exports = RescuedDog;