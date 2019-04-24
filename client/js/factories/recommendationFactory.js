angular.module('recommendations', []).factory('Recommendations', function($http) {
  const apiHost =
      $location.protocol() + "://" + $location.host() + ":" + $location.port();
  var methods = {
    getAll: function() {
      return $http.get(apiHost + '/api/recommendations');
    },

	create: function(recommendation) {
	  return $http.post(apiHost + '/api/recommendations', recommendation);
    },

    delete: function(id) {
      return $http.delete(apiHost + '/api/recommendations/' + id);
    }


  };

  return methods;
});
