angular.module('recommendations', []).factory('Recommendations', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('http://localhost:8080/api/recommendations');
    },

	create: function(recommendation) {
	  return $http.post('http://localhost:8080/api/recommendations', recommendation);
    },

    delete: function(id) {
      return $http.delete('http://localhost:8080/api/recommendations/' + id);
    }


  };

  return methods;
});
