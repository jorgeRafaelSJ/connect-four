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

		function diagonalRightWin (row, col) {
			// bottom left to top right with current play as fourth space
			if(col > 2 && row < 3 && $scope.board[row + 3][col - 3] == $scope.player && $scope.board[row + 2][col - 2] == $scope.player && $scope.board[row + 1][col - 1] == $scope.player && $scope.board[row][col] == $scope.player) {
				console.log("winner is diag right 4" + $scope.player);
			}
			// with current play as third space
			else if(col > 1 && col < 6 && row < 4 && row > 0 && $scope.board[row + 2][col - 2] == $scope.player && $scope.board[row + 1][col - 1] == $scope.player && $scope.board[row][col] == $scope.player && $scope.board[row - 1][col + 1] == $scope.player) {
				console.log("winner is diag right 3 " + $scope.player);
			}
			// with current play as second space
			else if(col > 1 && col < 5 && row < 5 && row > 1 && $scope.board[row + 1][col - 1] == $scope.player && $scope.board[row][col] == $scope.player && $scope.board[row - 1][col + 1] == $scope.player && $scope.board[row - 2][col + 2] == $scope.player) {
				console.log("winner is diag right 2" + $scope.player);
			}
			// with current play as first space
			else if(row > 2 && col < 4 && $scope.board[row][col] == $scope.player && $scope.board[row - 1][col + 1] == $scope.player && $scope.board[row - 2][col + 2] == $scope.player && $scope.board[row - 3][col + 3] == $scope.player) {
				console.log("winner is diag right 1 " + $scope.player);
			}
		}	
		function diagonalLeftWin (row, col) {
			// top left to bottom right with current play as fourth space
			if(row > 2 && col > 2 && $scope.board[row - 3][col - 3] == $scope.player && $scope.board[row - 2][col - 2] == $scope.player && $scope.board[row - 1][col - 1] == $scope.player && $scope.board[row][col] == $scope.player) {
				console.log("winner is diag left 4" + $scope.player);
			}
			// with current play as third space
			else if(row < 5 && row > 1 && col < 6 && col > 1 && $scope.board[row - 2][col - 2] == $scope.player && $scope.board[row - 1][col - 1] == $scope.player && $scope.board[row][col] == $scope.player && $scope.board[row + 1][col + 1] == $scope.player) {
				console.log("winner is diag left 3 " + $scope.player);
			}
			// with current play as second space
			else if(row < 4 && row > 0 && col < 5 && col > 0 && $scope.board[row - 1][col - 1] == $scope.player && $scope.board[row][col] == $scope.player && $scope.board[row + 1][col + 1] == $scope.player && $scope.board[row + 2][col + 2] == $scope.player) {
				console.log("winner is diag left 2" + $scope.player);
			}
			// with current play as first space
			else if(row < 3 && col < 4 && $scope.board[row][col] == $scope.player && $scope.board[row + 1][col + 1] == $scope.player && $scope.board[row + 2][col + 2] == $scope.player && $scope.board[row + 3][col + 3] == $scope.player) {
				console.log("winner is diag left 1 " + $scope.player);
			}
		}
		function horizontalWin (row, col) {
			// check left
			if($scope.board[row][col] == $scope.player && $scope.board[row][col - 1] == $scope.player && $scope.board[row][col - 2] == $scope.player && $scope.board[row][col - 3] == $scope.player) {
				console.log("winner is hori left " + $scope.player);
			}
			// check right
			else if($scope.board[row][col] == $scope.player && $scope.board[row][col + 1] == $scope.player && $scope.board[row][col + 2] == $scope.player && $scope.board[row][col + 3] == $scope.player) {
				console.log("winner is hori right " + $scope.player);
			}
			// check middle-left
			else if($scope.board[row][col - 2] == $scope.player && $scope.board[row][col - 1] == $scope.player && $scope.board[row][col] == $scope.player && $scope.board[row][col + 1] == $scope.player) {
				console.log("winner is hori 2" + $scope.player);
			}
			// check middle-right
			else if($scope.board[row][col - 1] == $scope.player && $scope.board[row][col] == $scope.player && $scope.board[row][col + 1] == $scope.player && $scope.board[row][col + 2] == $scope.player) {
				console.log("winner is hori 3 " + $scope.player);
			}
		}
		function verticalWin (row, col) {
			// check from top to bottom
			// need to check that row < 3 because first because there cant be vertical win with less than 4 rows in play.
			if(row < 3 && $scope.board[row][col] == $scope.player && $scope.board[row + 1][col] == $scope.player && $scope.board[row + 2][col] == $scope.player && $scope.board[row + 3][col] == $scope.player) {
				console.log("winner is " + $scope.player);
			}
		}

		function getWinner (row, col) {
			console.log('checking winner');
			diagonalRightWin(row, col);
			diagonalLeftWin(row, col);
			horizontalWin(row, col);
			verticalWin(row, col);
			return;
		}

		// when a column is clicked it will place the current player's color
		// in the lowest cell possible of that column
		$scope.lowestCellinCol = function (column) {
			if($("#row1 .col"+ column).hasClass("empty")) {
				$("#row1 .col"+ column).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
				col = column - 1; // using it for board array
				$scope.board[5][col] = $scope.player;
				console.log($scope.board);
				getWinner(5, col);
				turn();
			} else if($("#row2 .col"+ column).hasClass("empty")) {
				$("#row2 .col"+ column).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
				col = column - 1;
				$scope.board[4][col] = $scope.player;
				console.log($scope.board);
				getWinner(4, col);
				turn();
			} else if($("#row3 .col"+ column).hasClass("empty")) {
				$("#row3 .col"+ column).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
				col = column - 1;
				$scope.board[3][col] = $scope.player;
				console.log($scope.board);
				getWinner(3, col);
				turn();
			} else if($("#row4 .col"+ column).hasClass("empty")) {
				$("#row4 .col"+ column).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
				col = column - 1;
				$scope.board[2][col] = $scope.player;
				console.log($scope.board);
				getWinner(2, col);
				turn();
			} else if($("#row5 .col"+ column).hasClass("empty")) {
				$("#row5 .col"+ column).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
				col = column - 1;
				$scope.board[1][col] = $scope.player;
				console.log($scope.board);
				getWinner(1, col);
				turn();
			} else if($("#row6 .col"+ column).hasClass("empty")) {
				$("#row6 .col"+ column).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
				col = column - 1;
				$scope.board[0][col] = $scope.player;
				console.log($scope.board);
				getWinner(0, col);
				turn();
			}
		};
}]);
