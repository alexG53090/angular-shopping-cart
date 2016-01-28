angular.module('shoppingCart')

.factory('getTeas', function($http){
  return $http.get('../data/teas.json')
})
