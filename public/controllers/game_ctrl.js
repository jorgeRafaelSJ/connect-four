angular.module('cuatro')
	.controller('GameController', ['$scope', function ($scope) {
		var turnCount = 1;
		$scope.player = "red";
		var currentPlay = "";
		var row = "";
		var col = "";

		$scope.board = [
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
		];

		// switches the turn after every move
		function turn(){
			if(turnCount % 2 === 0){
				$scope.player = "red";
			} else {
				$scope.player = "black";
			}
			turnCount++;
		}

		function diagonalWin (row, col) {

		}
		function horizontalRightWin (row, col) {
			// check left
			// check right
			// check middle-left
			// check middle-right
		}
		function horizontalLeftWin (row, col) {

		}
		function verticalWin (row, col) {

		}

		function getWinner (row, col) {
			console.log('checking winner');
			// diagonal
			horizontalLeftWin(row, col);
			// vertical 
			return;
		}

		// when a column is clicked it will place the current player's color
		// in the lowest cell possible of that column
		$scope.lowestCellinCol = function (row, column) {
			if($("#row1 .col"+ column).hasClass("empty")) {
				$("#row1 .col"+ column).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
				row = 1;
				col = column;
				$scope.board[5][column - 1] = $scope.player;
				console.log($scope.board);
				getWinner(row, col);
				turn();
			} else if($("#row2 .col"+ column).hasClass("empty")) {
				$("#row2 .col"+ column).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
				row = 2;
				col = column;
				$scope.board[4][column - 1] = $scope.player;
				console.log($scope.board);
				getWinner(row, col);
				turn();
			} else if($("#row3 .col"+ column).hasClass("empty")) {
				$("#row3 .col"+ column).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
				row = 3;
				col = column;
				$scope.board[3][column - 1] = $scope.player;
				console.log($scope.board);
				getWinner(row, col);
				turn();
			} else if($("#row4 .col"+ column).hasClass("empty")) {
				$("#row4 .col"+ column).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
				row = 4;
				col = column;
				$scope.board[2][column - 1] = $scope.player;
				console.log($scope.board);
				getWinner(row, col);
				turn();
			} else if($("#row5 .col"+ column).hasClass("empty")) {
				$("#row5 .col"+ column).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
				row = 5;
				col = column;
				$scope.board[1][column - 1] = $scope.player;
				console.log($scope.board);
				getWinner(row, col);
				turn();
			} else if($("#row6 .col"+ column).hasClass("empty")) {
				$("#row6 .col"+ column).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
				row = 6;
				col = column;
				$scope.board[0][column - 1] = $scope.player;
				console.log($scope.board);
				getWinner(row, col);
				turn();
			}
		};
}]);
