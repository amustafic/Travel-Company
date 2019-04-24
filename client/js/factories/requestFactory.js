angular.module("requests", [])
  .factory("Requests", function($http, $location) {
    const host = $location.protocol() + "://" + $location.host() + ":" + $location.port();

    var methods = {
      getAll: function() {
        return $http.get(host + "/api/requests");
      },

      create: function(contact) {
        return $http.post(host + "/api/requests", contact);
      },

      delete: function(id) {
        return $http.delete(host + "/api/requests/" + id);
      }
    };

    return methods;
  });
