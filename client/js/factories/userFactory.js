angular.module("users", []).factory("Users", function($http, $location) {
  const host =
      $location.protocol() + "://" + $location.host() + ":" + $location.port();
  var methods = {
    getAll: function() {
      return $http.get(host + "/api/users");
    },

    create: function(newUser) {
      return $http.post(host + "/api/users", newUser);
    },

    delete: function(id) {
      return $http.delete(host + "/api/users/" + id);
    },
    authenticate: function(username, password) {
      var login = {
        email: username,
        password: password
      };
      return $http.post(host + "/api/users/login", login);
    },

    logout: function() {
      return $http.get(host + "/api/users/logout");
    },
    getSession: function() {
      return $http.get(host + "/api/session");
    }
  };

  return methods;
});
