angular.module('listings').factory('Listings', function($http) {
  var methods = {


	create: function(listing) {
	  return $http.post('https://localhost:8080/api/contact', listing);
    },


  };

  return methods;
});
