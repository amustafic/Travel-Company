angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('http://localhost:8080/api/listings');
    },

	create: function(listing) {
	  return $http.post('http://localhost:8080/api/listings', listing);
    },
    contact: function(contact) {
      return $http.post('http://localhost:8080/api/contacts', contact);
      },

    delete: function(_id) {
	   /**TODO
        return result of HTTP delete method
       */
      return $http.delete('http://localhost:8080/api/listings'+ _id);

    },

    login: function(listing) {
      return $http.get('http://localhost:8080/api/user' + user);
    },

    register: function(user) {
      return $http.post('http://localhost:8080/api/user', user);
    }
  };

  return methods;
});