angular.module('recommendations').controller('RecommendationsController', ['$scope', 'Recommendations',
  function($scope, Recommendations) {
    /* Get all the listings, then bind it to the scope */
    Recommendations.getAll().then(function(response) {
      $scope.recommendations = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addRecommendation = function() {
	  /**TODO
	  *Save the article using the Listings factory. If the object is successfully
	  saved redirect back to the list page. Otherwise, display the error
	 */

   $scope.recommendations = {
         user: "",
         recommend: "",
         info: "",
         link: "",
      //   id: null
       };
    //$scope.recommendations.push($scope.newRecommendation);
    //$scope.newRecommendation = {};
    //$scope.recommendations.push($scope.newRecommendation);
     Recommendations.create($scope.newRecommendation).then(function(response) {
       $scope.recommendations.user = response.data.user;
         $scope.recommendations.recommend = response.data.recommend;
         $scope.recommendations.info = response.data.info;
         $scope.recommendations.link = response.data.link;
         console.log("creating user");
         alert("Recommendation successfully created!");
       }, function (error) {
         console.log('Unable to create user:', error);
         alert("Recommendation could not be created!");
       })};

    $scope.deleteRecommendation = function(index) {
	   /**TODO
        Delete the article using the Listings factory. If the removal is successful,
		navigate back to 'listing.list'. Otherwise, display the error.
       */
       var id = $scope.recommendations[index]._id;
       Recommendations.delete(id).then(function(res) {
         $scope.recommendations.splice(index, 1);
       }, function (error){
         console.log('Error:', error);
          //  this.timeout(3000);
            Recommendations.getAll().then(function (response) {
                $scope.recommendations = response.data;
            }, function (error) {
                console.log('Unable to retrieve listings:', error);
            });
        });

    };


    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.recommendations[index];
    };
  }
]);
