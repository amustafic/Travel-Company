//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password

//mongodb://adnan:episkeys1@ds219055.mlab.com:19055/boot3
//mongodb://testUser:password123@ds241493.mlab.com:41493/group2_swe
module.exports = {
    db: {
      uri: 'mongodb://testUser:password123@ds241493.mlab.com:41493/group2_swe',
    },
    port: process.env.PORT || 8080
  };
