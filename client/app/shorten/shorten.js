angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    console.log($scope.link);
    console.log("we made it to the addLink function!");
    Links.addLink($scope.link).then(function(data) {
      $scope.link = {};
      console.log(data);
    })
    .catch(function(error) {
        console.error(error);
    });
  };
});
