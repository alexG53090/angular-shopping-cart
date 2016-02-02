angular.module('shoppingCart')
.controller("shoppingcartController", function($scope, $http, cartService){
  $scope.cartService = cartService.cart;
})
