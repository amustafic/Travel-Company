/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
<<<<<<< HEAD
  firstname: {
    type: String 
  }, 
  lastname: {
    type: String 
  }, 
  textnote: {
    type: String
  }, 
  email: {
    type: String
  },
   arrival: {
    type: String
  },
  departure: {
    type: String
  },
  minbudget: {
    type: Number
  },
  maxbudget: {
    type: Number
  },
  phone: {
    type: Number
  },
   comments: {
    type: String
=======
  name: {
    type: String, 
    required: true
  }, 
  code: {
    type: String, 
    required: true, 
    unique: true
  }, 
  address: String, 
  coordinates: {
    latitude: Number, 
    longitude: Number
>>>>>>> 43e4ea8855695c15842ece57f69c1d497fcb116a
  },
  created_at: Date,
  updated_at: Date
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  var currentTime = new Date;
  this.updated_at = currentTime;
  if(!this.created_at)
  {
    this.created_at = currentTime;
  }
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
