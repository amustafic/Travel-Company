/* Dependencies */
var mongoose = require('mongoose'),
    Contact = require('../models/contacts.server.model.js');
    //User = require('../models/passport_user.js');
/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update listings.
  On an error you should send a 404 status code, as well as the error message.
  On success (aka no error), you should send the listing(s) as JSON in the response.
  HINT: if you are struggling with implementing these functions, refer back to this tutorial
  from assignment 3 https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
 */


/* Create a listing */
exports.create = function(req, res) {

  /* Instantiate a Listing */
  var contact = new Contact(req.body);


  /* Then save the listing */
  contact.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(contact);
    }
  });
};

/* Show the current listing 
exports.read = function(req, res) {
  /* send back the listing as json from the request 
  res.json(req.contact);
};

/* Show the current listing 
exports.read = function(req, res) {
  /* send back the listing as json from the request 
  res.json(req.contact);
};

/* Update a listing */


/* Delete a listing */
/*exports.delete = function(req, res) {
    var listing = req.listing;

    /* Remove the article 
    listing.remove(function(error) {
        if (error){
          console.log(err);
          res.status(400).send(err);
        } else {
          res.json(listing);
        }
    });
};

/* Retreive all the director dy listings, sorted alphabetically by listing code */
/*exports.listContact = function(req, res) {
    Contact.find({}).sort('code').exec(function(err, contact) {
        if(err) {
            res.status(400).send(err);
        }
        else {
            res.status(200).json(listings);
        }
    });
};
*/
/*
  Middleware: find a listing by its ID, then pass it to the next request handler.
 Find the listing using a mongoose query,
        bind it to the request object as the property 'listing',
        then finally call next
 */
/*exports.listingByID = function(req, res, next, id) {
  Listing.findById(id).exec(function(err, listing) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.listing = listing;
      next();
    }
  });
};*/