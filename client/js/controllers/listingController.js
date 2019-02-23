angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      Listings.create($scope.new_entry).then(function ()
      {
        window.location.href = "./index.html";
      }, function (error){
        console.log(error);
      });
    

	  /*Save the article using the Listings factory. If the object is successfully 
	  saved redirect back to the list page. Otherwise, display the error
	 */
    };

    $scope.deleteListing = function(id) {
      Listings.delete(id).then(function ()
    {
      window.location.href = "./index.html";
    }, function (error){
      console.log(error);
    });
    }

    $scope.showDetails = function(index) {
      //$scope.detailedInfo = $scope.listings[index];
       if(index.address == null || index.coordinates == null) {
        $scope.address = "No details to show.";
        $scope.latitude = "";
        $scope.longitude = "";
      } else {
        $scope.address = "Address: " + index.address + "\n";
        $scope.latitude = "Latitude: " + index.coordinates.latitude + "\n";
        $scope.longitude = "Longitude: " + index.coordinates.longitude + "\n";
      }

    };
  }
]);