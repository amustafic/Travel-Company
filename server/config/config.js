//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password

//mongodb://adnan:episkeys1@ds219055.mlab.com:19055/boot3
<<<<<<< Updated upstream
module.exports = {
    db: {
      uri: 'mongodb://Josh:NUDNik18!@ds015335.mlab.com:15335/joshswerdlow', //place the URI of your mongo database here.
=======
//mongodb://testUser:password123@ds241493.mlab.com:41493/group2_swe
//uri: 'mongodb://testUser:password123@ds241493.mlab.com:41493/group2_swe',
module.exports = {
    db: {
      uri: 'mongodb://Josh:NUDNik18!@ds015335.mlab.com:15335/joshswerdlow',
>>>>>>> Stashed changes
    },
    port: process.env.PORT || 8080
  };

  /* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */
