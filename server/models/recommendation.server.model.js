var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var recommendationSchema = new Schema({

  user: {
    type: String
  },

  recommend: {
    type: String
  },

  info: {
    type: String
  },

  link: {
    type: String
  },
  createdDate: Date,
  updatedDate: Date
});

recommendationSchema.pre("save", function(next) {
  this.updatedDate = new Date();
  if (!this.createdDate) {
    this.createdDate = new Date();
  }
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Recommendation = mongoose.model("Recommendation", recommendationSchema);
module.exports = Recommendation;
