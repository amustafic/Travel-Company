angular.module('notes').controller('NotesController', ['$scope', 'Notes', 
  function($scope, Notes) {
    Notes.getAll().then(function(response) {
      $scope.notes = response.data;
    }, function(error) {
      console.log('Unable to retrieve note:', error);
    });
    $scope.detailedInfo = undefined;

    $scope.addNote= function(newFirstname, newLastname, newNote) {
        var newNote = {
            firstname:newFirstname,
              lastname:newLastname, 
             textnote:newNote
        };
        Notes.create(newNote)
          .then(res => {
            if (res.status == 200)
              console.log("Note added successfully", res.data);
            window.location = window.location;
          })
          .catch(err => {
            console.log("Error creating note: ", err);
          });
      };

    $scope.deleteNote = function(index) {

      Notes.delete(index).then(function(response)
      {
        $scope.notes = response.data;
          
          Notes.getAll().then(function(response) {
            $scope.note = response.data;
          }, function(error) {
            console.log('Unable to retrieve notes:', error);
          });}, function(error) {
        console.log('Unable to retrieve notes:', error);
      });


    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.notes[index];
    };
  }
]);