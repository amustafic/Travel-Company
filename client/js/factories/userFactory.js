angular.module("users", []).factory("Users", function($http, $location) {
  const apiHost =
      $location.protocol() + "://" + $location.host() + ":" + $location.port();
  var methods = {
    getAll: function() {
      return $http.get(apiHost + "/api/users");
    },

    create: function(newUser) {
      return $http.post(apiHost + "/api/users", newUser);
    },

    delete: function(id) {
      return $http.delete(apiHost + "/api/users/" + id);
    },
    authenticate: function(username, password) {
      var login = {
        email: username,
        password: password
      };
      return $http.post(apiHost + "/api/users/login", login);
    },

    logout: function() {
      return $http.get(apiHost + "/api/users/logout");
    },
    getSession: function() {
      return $http.get(apiHost + "/api/session");
    }
  };

  return methods;
});
