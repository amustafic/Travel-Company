angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */

    $scope.addListing = function() {

      $scope.listings.push($scope.newListing);
      $scope.newListing = {};

      Listings.create($scope.newListing).then(function ()
      {
      //window.location.href = "./";
      }, function (error){
        console.log(error);
      });


	  /*Save the article using the Listings factory. If the object is successfully
	  saved redirect back to the list page. Otherwise, display the error
	 */
    };
  }
]);
