angular.module("requests", [])
  .factory("Requests", function($http, $location) {
    var methods = {
      getAll: function() {
        return $http.get("http://localhost:8080/api/requests");
      },

      create: function(contact) {
        return $http.post("http://localhost:8080/api/requests", contact);
      },

      delete: function(id) {
        return $http.delete("http://localhost:8080/api/request/" + id);
      }
    };

    return methods;
  });
