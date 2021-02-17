const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constant = require('../utils/constant');
const BankSchema = new Schema({
  name: {
      type:String,
      required: true
  },
  address: {
    type:String,
    required: true
},
  branch: {
    type:String,
    required: true
},
  phone: {
    type:Number,
    required: true
},
});
module.exports = mongoose.model(constant.MODEL.BANK, BankSchema);