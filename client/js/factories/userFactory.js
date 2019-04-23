angular.module("users", []).factory("Users", function($http, $location) {
  var methods = {
    getAll: function() {
      return $http.get("http://localhost:8080/api/users");
    },

    create: function(newUser) {
      return $http.post("http://localhost:8080/api/users", newUser);
    },

    delete: function(id) {
      return $http.delete("http://localhost:8080/api/users/" + id);
    },
    authenticate: function(username, password) {
      var login = {
        email: username,
        password: password
      };
      return $http.post("http://localhost:8080/api/users/login", login, httpOptions);
    },

    logout: function() {
      return $http.get("http://localhost:8080/api/users/logout");
    },
    getSession: function() {
      return $http.get("http://localhost:8080/api/session");
    }
  };

  return methods;
});
