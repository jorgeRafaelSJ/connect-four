angular.module('cuatro').directive('boardContainer', function() {
      return {
          restrict: 'E',
          templateUrl: 'templates/board.html',
          controller: 'GameController',
          controllerAs: 'game'
      };
 });