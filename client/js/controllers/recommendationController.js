angular.module("recommendations").controller("RecommendationsController", [
  "$scope",
  "Recommendations",
  function($scope, Recommendations) {
    Recommendations.getAll()
      .then(res => {
        $scope.recommendations = res.data;
      })
      .catch(err => {
        console.log("Unable to retrieve recommendations:", err);
      });

//    $scope.detailedInfo = undefined;

  //  $scope.sessionUsername = $.parseJSON(sessionStorage.getItem("user")).email;

    $scope.addRecommendation = function() {
      $scope.recommendations.push($scope.recommendation);
      Recommendations.create($scope.recommendation);
      $scope.recommendation = {};
      };
      

    };

]);
