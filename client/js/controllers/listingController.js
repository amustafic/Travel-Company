angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
/*
    $scope.addListing = function() {
/*
      $scope.newListing = {
        firstName : "",
        lastName : "",
        email: "",
        travelDates : "",
        phone : NULL,
        budget : NULL,
      };
console.log("fuck you"),
      //$scope.listings.push($scope.newListing);


      Listings.create($scope.newListing).then(function ()
      {
        /*
        $scope.lisitings.firstName = ($scope.newListing.firstName),
        $scope.lisitings.lastName = ($scope.newListing.lastName),
        $scope.lisitings.email = ($scope.newListing.email),
        $scope.lisitings.travelDates = ($scope.newListing.travelDates),
        $scope.listings.phone = ($scope.newListing.phone),
        $scope.lisitings.budget = ($scope.newListing.budget),
        console.log("fuck you"),

      //window.location.href = "./";
      }, function (error){
        console.log(error);
      });
*/
$scope.addListing = function() {
   $scope.listings.push($scope.newListing);
   Listings.create($scope.newListing);
   $scope.newListing = {};
   };
	  /*Save the article using the Listings factory. If the object is successfully
	  saved redirect back to the list page. Otherwise, display the error
	 */
    };
  }
]);
