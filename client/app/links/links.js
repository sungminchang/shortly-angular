angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  // Your code here
  $scope.data = {};
  $scope.predicate = '-visits';

  $scope.getLinks = function() {
    Links.retrieveLinks()
      .then(function(data) {
        $scope.data.links = data;
      })
      .catch(function(error) {
        console.error(error);
      });

  };

  $scope.getLinks();
})
.filter('searchFor', function(){
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function(item){
            if(item.url.toLowerCase().indexOf(searchString) !== -1){
            result.push(item);
        }
        });
        return result;

        // Took code from
        // http://code.ciphertrick.com/2015/02/07/live-search-using-custom-filter-in-angular-js/
    };
});
