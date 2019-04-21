angular.module('contacts').controller('ContactController', ['$scope', 'Contacts', 
  function($scope, Contacts) {
    Contacts.getAll().then(function(response) {
      $scope.contacts = response.data;
    }, function(error) {
      console.log('Unable to retrieve note:', error);
    });
    $scope.detailedInfo = undefined;

    $scope.addContact= function(newFirstname, newLastname, newEmail, newPhone,newDeparture, newArrival,newMin, newMax,newComment) {
        var newContact = {
            firstname:newFirstname,
              lastname:newLastname, 
              email: newEmail,
               arrival:newArrival,
              departure: newDeparture,
              minbudget: newMin,
              maxbudget:newMax,
              phone: newPhone,
               comments:newComment
        };
        Contacts.create(newContact)
          .then(res => {
            if (res.status == 200)
              console.log("Contact added successfully", res.data);
            window.location = window.location;
          })
          .catch(err => {
            console.log("Error creating note: ", err);
          });
      };

    $scope.deleteContact = function(index) {

      Contacts.delete(index).then(function(response)
      {
        $scope.contacts = response.data;
          
          Contacts.getAll().then(function(response) {
            $scope.contact = response.data;
          }, function(error) {
            console.log('Unable to retrieve notes:', error);
          });}, function(error) {
        console.log('Unable to retrieve notes:', error);
      });


    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.contacts[index];
    };
  }
]);