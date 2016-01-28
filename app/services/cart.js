angular.module('shoppingCart')
.service('cartService', function(){
  var cart = [];
  return {
    cart: cart,
    addToCart: function(tea, quantity){
      var order = {
        product: tea,
        quantity: quantity,
      }
      cart.push(order)
      console.log(cart)
    },
    remove: function(tea, quantity){
      cart.pop(order)
      console.log(cart)
    },
    getAll: function(cart){
      console.log(cart)
    }
  };
})
