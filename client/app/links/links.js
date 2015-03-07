angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  // Your code here
  $scope.data = {};

  $scope.getLinks = function() {
    Links.retrieveLinks()
      .then(function(data) {
        $scope.data.links = data;
      })
      .catch(function(error) {
        console.error(error);
      });

  };

  $scope.addLink = function() {

  };

  $scope.getLinks();
});
