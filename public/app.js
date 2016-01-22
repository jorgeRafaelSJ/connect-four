'use strict';

angular.module('cuatro', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      	.state('game', {
        	url: "/",
        	templateUrl: 'templates/main_view',
        	controller: 'GameController'
      	});
  

    $urlRouterProvider.otherwise("/");

	$locationProvider.html5Mode({
    	enabled: true,
    	requireBase: false
	});
}]);
