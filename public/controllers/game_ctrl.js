angular.module('cuatro')
	.controller('GameController', ['$scope','boardFactory', 'playAgain', 'colHover', function ($scope, boardFactory, playAgain, colHover) {
		// red starts the game
		$scope.player = "red";
		$scope.winner = null;
		$scope.game = true;
		var board = new boardFactory.Board(7,6);
		board.initiate();

		// goes off when the player clicks on a column
		$scope.makeMove = function (col) {
			board.lowestCellinCol(col);
			$scope.player = board.playerInTurn.color;
			if(board.winner){
				$scope.game = false;
				$scope.winner = board.winner;
			}
		};

		// resets board and turns in the object
		$scope.playAgain = function() {
			// resets board on the dom
			playAgain.reset();
			$scope.player = "red";
			$scope.game = true;
			// makes new instance of board / new game
			board = new boardFactory.Board(7,6);
			board.initiate();
		};

		$scope.hovering = function(col) {
			if(screen.width > 800) {
				colHover.hovering(col);
			}
		};		
}]);


