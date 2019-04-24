angular.module("recommendations", [])
  .factory("Recommendations", function($http, $location) {
    const host = $location.protocol() + "://" + $location.host() + ":" + $location.port();
    var methods = {
      getAll: function() {
        return $http.get(host + "/api/recommendations");
      },

      create: function(recommendation) {
        return $http.post(host + "/api/recommendations", recommendation);
      },

      delete: function(id) {
        return $http.delete(host + "/api/recommendations/" + id);
      }
    };

    return methods;
  });
