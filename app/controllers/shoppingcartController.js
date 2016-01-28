angular.module('shoppingCart')

.controller("shoppingcartController", function($scope, $http, cartService){

  $scope.getCart = function ($scope, cartService) {
    $scope.carItems = cartService.cart;
  }
  console.log($scope.cartItems)

})
