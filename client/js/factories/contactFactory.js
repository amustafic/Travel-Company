angular.module("contacts", [])
  .factory("Contacts", function($http, $location) {
    const apiHost =
        $location.protocol() + "://" + $location.host() + ":" + $location.port();
    var methods = {
      getAll: function() {
        return $http.get(apiHost + "/api/contacts");
      },

      create: function(contact) {
        return $http.post(apiHost + "/api/contacts", contact);
      },

      delete: function(id) {
        return $http.delete(apiHost + "/api/contacts/" + id);
      }
    };

    return methods;
  });
