var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var loginSchema = new Schema({
  username: {type:String},
  password: {type:String},
  first_name: {type:String},
  last_name: {type:String},
  created_at: Date,
  updated_at: Date
});


loginSchema.plugin(passportLocalMongoose);
loginSchema.pre('save', function(next) {
  const currentTime = new Date().toISOString();
  this.updated_at = currentTime;
  if (this.created_at == null)
  {
    this.created_at = currentTime;
  }
  next();
});

const User = mongoose.model('Users', loginSchema);
module.exports = User;
