//This file holds any configuration variables we may need 
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: 'mongodb://bg:123456a@ds155727.mlab.com:55727/bootcamp3bgoldstein', //place the URI of your mongo database here. //123456a
  }, 
  port: process.env.PORT || 8080
};

//Wave42Sea$