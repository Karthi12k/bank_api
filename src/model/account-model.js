const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constant = require('../utils/constant');
const AccountSchema = new Schema({
  name: {
      type:String,
      required: true
  },
  number: {
    type:Number,
    required: true,
},
  bank: {
    type:String,
    required: true
},
  user: {
    type:String,
    required: true
},
});
module.exports = mongoose.model(constant.MODEL.ACCOUNT, AccountSchema);