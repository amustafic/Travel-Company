var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var blogPostSchema = new Schema({
    title: { type: String, required: true },
    text: String,
    pic: String,
    createdDate: Date,
    updatedDate: Date
});

blogPostSchema.pre('save', function(next) {
    this.updatedDate = new Date;
    if(!this.createdDate)
    {
        this.createdDate = new Date;
    }
    next();
});

var BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
