angular.module('contacts', []).factory('Contacts', function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://localhost:8080/api/contacts');
      },
      
      create: function(contact) {
        return $http.post('http://localhost:8080/api/contacts', contact);
      }, 
  
      delete: function(id) {
         /**TODO
          return result of HTTP delete method
         */
       return $http.delete('http://localhost:8080/api/contacts/'+id);
  
      }
    };
  
    return methods;
  });