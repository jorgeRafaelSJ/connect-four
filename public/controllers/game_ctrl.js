angular.module('cuatro')
	.controller('GameController', ['$scope', 'boardFactory', 'playAgain', 'colHover', function ($scope, boardFactory, playAgain, colHover) {
		var vm = this;
		// red starts the game
		vm.player = "red";
		vm.winner = null;
		vm.game = true;
		vm.board = new boardFactory.Board(7,6);
		vm.board.initiate();
		vm.gameBoard = vm.board.gameBoard;

		vm.setClass = function (index) {
			console.log(".col" + index);
		 return ".col" + index;
		};

		// goes off when the player clicks on a column
		vm.makeMove = function (col) {
			vm.board.lowestCellinCol(col);
			vm.player = vm.board.playerInTurn.color;
			if(vm.board.winner){
				vm.game = false;
				vm.winner = vm.board.winner;
			}
		};

		// resets board and turns in the object
		vm.playAgain = function() {
			// resets board on the dom
			playAgain.reset();
			vm.player = "red";
			vm.game = true;
			// makes new instance of board / new game
			vm.board = new boardFactory.Board(7,6);
			vm.board.initiate();
		};

		vm.hovering = function(col) {
			if(screen.width > 800) {
				colHover.hovering(col);
			}
		};	
}]);


