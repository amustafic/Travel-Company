//This file holds any configuration variables we may need 
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: 'mongodb://testUser:123456a@ds241493.mlab.com:41493/group2_swe', //place the URI of your mongo database here. //123456a
  }, 
  port: process.env.PORT || 8080
};

//Wave42Sea$