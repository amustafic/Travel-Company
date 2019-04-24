angular.module("requests").controller("RequestsController", [
  "$scope",
  "Requests",
  function($scope, Requests) {
    Requests.getAll()
      .then(res => {
        $scope.requests = res.data;
        console.log('resdata', $scope.requests);
      })
      .catch(err => {
        console.log("Unable to get requests:", error);
      });


    $scope.detailedInfo = undefined;

    $scope.addRequest = function(newEmail, newReturn, newDeparture, newReturnDate, newDepartureDate, newBudget, newNumAdults, newNumKids, newComments) {
      var newRequest = {
        email: newEmail,
        return: newReturn,
        departure: newDeparture,
        returnDate: newReturnDate,
        departureDate: newDepartureDate,
        budget: newBudget,
        numAdults: newNumAdults,
        numKids: newNumKids,
        comments: newComments
      };

      Requests.create(newRequest)
        .then(res => {
          if (res.status == 200)
            console.log("request added successfully", res.data);
          window.location = window.location;
        })
        .catch(err => console.log("Unable to retrieve requests:", error));
    };

    $scope.deleteRequest = function(id) {
      Requests.delete(id).then(
        function(response) {
          $scope.requests = response.data;

          Requests.getAll().then(
            function(response) {
              $scope.requests = response.data;
            },
            function(error) {
              console.log("Unable to retrieve requests:", error);
            }
          );
        },
        function(error) {
          console.log("Unable to retrieve requests:", error);
        }
      );
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.requests[index];
    };
  }
]);
