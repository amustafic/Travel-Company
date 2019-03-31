//This file holds any configuration variables we may need
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
    uri: 'mongodb://Josh:NUDNik18!@ds015335.mlab.com:15335/joshswerdlow', //place the URI of your mongo database here. //123456a
  },
  port: process.env.PORT || 8080
};

//Wave42Sea$
