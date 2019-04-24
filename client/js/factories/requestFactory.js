angular.module("requests", [])
  .factory("Requests", function($http, $location) {
    const apiHost =
        $location.protocol() + "://" + $location.host() + ":" + $location.port();
    var methods = {
      getAll: function() {
        return $http.get(apiHost + "/api/requests");
      },

      create: function(contact) {
        return $http.post(apiHost + "/api/requests", contact);
      },

      delete: function(id) {
        return $http.delete(apiHost + "/api/requests/" + id);
      }
    };

    return methods;
  });
