angular.module('shoppingCart')

.controller("mainController", function($scope, $http, getTeas, cartService){

  getTeas.then(function(data){
    $scope.data = data.data;
    // console.log("your data: ", $scope.data)
  })

  $scope.userShoppingCart = cartService.cart;
  $scope.addToCart = cartService.addToCart

})
