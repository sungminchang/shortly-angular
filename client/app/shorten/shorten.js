angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.error = {};

  $scope.addLink = function() {
    console.log($scope.link);
    console.log("we made it to the addLink function!");
    Links.addLink($scope.link).then(function(data) {
      $scope.error.message = '';
      $scope.link.link = '';
      console.log('data returned to the promise', data);
    })
    .catch(function(error) {
        console.error(error);
        $scope.error.message = error.data.error;
    });
  };
});
