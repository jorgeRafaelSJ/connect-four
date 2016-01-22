angular.module('cuatro').directive('welcomeContainer', function() {
      return {
          restrict: 'E',
          templateUrl: 'templates/welcome.html',
          controller: 'GameController',
          controllerAs: 'game'
      };
 });