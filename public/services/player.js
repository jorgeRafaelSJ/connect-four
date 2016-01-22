angular.module('cuatro').factory('playerFactory', [ function() {

  function player (color, first) {
    this.color = color;
    this.first = first;
  }
  
  return {
    player:player
  };

}]);