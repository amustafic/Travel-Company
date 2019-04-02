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
    $scope.listings.push($scope.newListing);
    Listings.create($scope.newListing);
    $scope.newListing = {};
    };

    $scope.deleteListing = function(index) {
      var indexOf = $scope.listings.indexOf(index);
      Listings.delete(index).then(function(response) {
    }, function(error) {
      console.log('Could not delete:', error);
    });
      $scope.listings.splice(indexOf,1);
    };
    
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);