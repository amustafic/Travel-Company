var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var requestSchema = new Schema({
  email: {
    type: String
  },
  return: {
    type: String
  },
  departure: {
    type: String
  },
  returnDate: {
    type: String
  },
  departureDate: {
    type: String
  },
  budget: {
    type: Number
  },
  numAdults: {
    type: Number
  },
  numKids: {
    type: Number
  },
   comments: {
    type: String
  },
  created_at: Date,
  updated_at: Date
});

requestSchema.pre('save', function(next) {
  var currentTime = new Date;
  this.updated_at = currentTime;
  if(!this.created_at)
  {
    this.created_at = currentTime;
  }
  next();
});

var Request = mongoose.model('Request', requestSchema);

module.exports = Request;
