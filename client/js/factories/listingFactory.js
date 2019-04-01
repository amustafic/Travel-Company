angular.module('listings').factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://ufdirectoryapp1234.herokuapp.com/api/listings');
    },
	
	create: function(listing) {
	  return $http.post('https://ufdirectoryapp1234.herokuapp.com/api/listings', listing);
    }, 

    delete: function(id) {
      return $http.delete('https://ufdirectoryapp1234.herokuapp.com/api/listings/' + id._id);
    }
  };

  return methods;
});
