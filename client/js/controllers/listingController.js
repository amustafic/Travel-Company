angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });
    Listings.getAll().then(function(response) {
      $scope.contacts = response.data;
    }, function(error) {
      console.log('Unable to retrieve contact:', error);
    });

    $scope.detailedInfo = undefined;


    $scope.addListing = function() {
    $scope.listings.push($scope.newListing);
    Listings.create($scope.newListing);
    $scope.newListing = {};
    };
    $scope.addContact = function() {
      $scope.contacts.push($scope.contact);
      Listings.contact($scope.contact);
      $scope.contact = {};
      };

      $scope.deleteListing = function(id) {
        console.log(id);
       Listings.delete(id).then(function ()
      {
      }, function (error){
        console.log(error);
      }); 
      };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };

    $scope.user = {
          first_name: "",
          last_name: "",
          username: "",
          password: "",
          id: null
        };


    $scope.register = function() {
      //$scope.user.push($s);
      Listings.register($scope.user).then(function (response) {
        $scope.user.first_name = response.data.first_name;
          $scope.user.last_name = response.data.last_name;
          $scope.user.username = response.data.username;
          $scope.user.id = response.data._id;
          console.log("creating user");
        }, function (error) {
          console.log('Unable to create user:', error);
      });
    };


    $scope.login = function () {
      if ($scope.user.username != "" && $scope.user.password != "") {
        Listings.login($scope.user.username).then(function (response) {
          // Save user details
          $scope.user.first_name = response.data.first_name;
          $scope.user.last_name = response.data.last_name;
          $scope.user.username = response.data.username;
          $scope.user.id = response.data._id;
          // Toggle Views
        }, function (error) {
          console.log("Wrong Credentials");
        });

      }
    }

     
      }


]);


  