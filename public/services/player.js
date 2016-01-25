angular.module('cuatro').factory('playerFactory', [ function() {

  function player (color) {
    this.color = color;
  }
  
  return {
    player:player
  };

}]);