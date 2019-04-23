/*For Testing*/
angular.module('contacts', []).factory('Contacts', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('http://localhost:8080/api/contacts');
    },

	create: function(listing) {
	  return $http.post('http://localhost:8080/api/contacts', contact);
    },

    contact: function(contact) {
      return $http.post('http://localhost:8080/api/contacts', contact);
      },

      request: function(contact) {
        return $http.post('http://localhost:8080/api/contacts', contact);
        },


      delete: function(id) {
        return $http.delete('http://localhost:8080/api/listings/' + id, id);
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
