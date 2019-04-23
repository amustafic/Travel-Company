var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var contactSchema = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  },
   comments: {
    type: String
  },
  created_at: Date,
  updated_at: Date
});

contactSchema.pre('save', function(next) {
  var currentTime = new Date;
  this.updated_at = currentTime;
  if(!this.created_at)
  {
    this.created_at = currentTime;
  }
  next();
});

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
