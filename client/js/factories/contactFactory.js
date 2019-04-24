angular.module("contacts", [])
  .factory("Contacts", function($http, $location) {
    const host = $location.protocol() + "://" + $location.host() + ":" + $location.port();
    var methods = {
      getAll: function() {
        return $http.get(host + "/api/contacts");
      },

      create: function(contact) {
        return $http.post(host + "/api/contacts", contact);
      },

      delete: function(id) {
        return $http.delete(host + "/api/contacts/" + id);
      }
    };

    return methods;
  });
