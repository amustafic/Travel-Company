angular.module("contacts", [])
  .factory("Contacts", function($http, $location) {
    var methods = {
      getAll: function() {
        return $http.get("http://localhost:8080/api/contacts");
      },

      create: function(contact) {
        return $http.post("http://localhost:8080/api/contacts", contact);
      },

      delete: function(id) {
        return $http.delete("http://localhost:8080/api/contacts/" + id);
      }
    };

    return methods;
  });
