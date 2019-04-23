angular.module("contacts").controller("ContactsController", [
  "$scope",
  "Contacts",
  function($scope, Contacts) {
    Contacts.getAll()
      .then(res => {
        $scope.contacts = res.data;
        console.log('resdata', $scope.contacts);
      })
      .catch(err => {
        console.log("Unable to get contacts:", error);
      });


    $scope.detailedInfo = undefined;

    $scope.addContact = function(newFirstName, newLastName, newEmail, newComment) {
      var newContact = {
        firstname: newFirstName,
        lastname: newLastName,
        email: newEmail,
        comments: newComment
      };
      Contacts.create(newContact)
        .then(res => {
          if (res.status == 200)
            console.log("contact added successfully", res.data);
          window.location = window.location;
        })
        .catch(err => console.log("Unable to retrieve contacts:", error));
    };

    $scope.deleteContact = function(id) {
      Contacts.delete(id).then(
        function(response) {
          $scope.contacts = response.data;

          Contacts.getAll().then(
            function(response) {
              $scope.contacts = response.data;
            },
            function(error) {
              console.log("Unable to retrieve contacts:", error);
            }
          );
        },
        function(error) {
          console.log("Unable to retrieve contacts:", error);
        }
      );
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.contacts[index];
    };
  }
]);
