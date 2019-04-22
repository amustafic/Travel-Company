angular
  .module("recommendations", [])
  .factory("Recommendations", function($http, $location) {
    const apiHost =
      $location.protocol() + "://" + $location.host() + ":" + $location.port();
    const httpOptions = {
      headers: {
        "Content-Type": "application/json"
        //'Authorization': 'auth-token' TODO: add request authorization via tokens?
      }
    };
    var methods = {

      create: function(recommendation) {
        return $http.post(
          apiHost + "/api/recommendations",
          recommendation,
          httpOptions
        );
      }

      return methods;
  });
