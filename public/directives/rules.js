angular.module('cuatro').directive('rulesContainer', function() {
      return {
          restrict: 'E',
          templateUrl: 'templates/rules.html',
          controller: 'GameController',
          controllerAs: 'game'
      };
 });