angular.module("recommendations").controller("RecommendationsController", [
  "$scope",
  "Recommendations",
  function($scope, Recommendations) {
    Recommendations.getAll()
      .then(res => {
        $scope.recommendations = res.data;
        console.log('resdata', $scope.recommendations);
      })
      .catch(err => {
        console.log("Unable to get recommendations:", error);
      });


    $scope.detailedInfo = undefined;

    $scope.addRecommendation = function(newFirstName, newLastName, newEmail, newComment) {
      var newRecommendation = {
        firstname: newFirstName,
        lastname: newLastName,
        email: newEmail,
        comments: newComment
      };
      Recommendations.create(newRecommendation)
        .then(res => {
          if (res.status == 200)
            console.log("recommendation added successfully", res.data);
          window.location = window.location;
        })
        .catch(err => console.log("Unable to retrieve recommendations:", error));
    };

    $scope.deleteRecommendation = function(id) {
      Recommendations.delete(id).then(
        function(response) {
          $scope.recommendations = response.data;

          Recommendations.getAll().then(
            function(response) {
              $scope.recommendations = response.data;
            },
            function(error) {
              console.log("Unable to retrieve recommendations:", error);
            }
          );
        },
        function(error) {
          console.log("Unable to retrieve recommendations:", error);
        }
      );
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.recommendations[index];
    };
  }
]);
