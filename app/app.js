angular.module('shoppingCart', ['ngRoute'])

.config(function($routeProvider){
  $routeProvider
    .when('/', {
    templateUrl: '/views/main.html',
    controller: 'mainController'
  })
    .when('/checkout', {
    templateUrl: '/views/checkout.html',
    controller: 'shoppingcartController'
  })
    .when('/about', {
    templateUrl: '/views/about.html',
    controller: 'mainController'
  })
    .when('/contact', {
    templateUrl: '/views/contact.html',
    controller: 'mainController'
  })
    .otherwise({
    redirectTo: '/views/main.html'
  });
})
