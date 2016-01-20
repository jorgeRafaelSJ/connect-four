angular.module('cuatro')
	.controller('GameController', ['$scope', function ($scope) {
		
		var turnCount = 1;
		// red starts the game
		$scope.player = "red";
		$scope.winner = null;
		$scope.game = true;
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
				$('#turn-text').css('color',"red");
			} else {
				$scope.player = "black";
				$('#turn-text').css('color',"black");
			}
			turnCount++;
		}

		function diagonalRightWin (row, col) {
			// bottom left to top right with current play as fourth space
			if(col > 2 && row < 3 && $scope.board[row + 3][col - 3] == $scope.player && $scope.board[row + 2][col - 2] == $scope.player && $scope.board[row + 1][col - 1] == $scope.player && $scope.board[row][col] == $scope.player) {
				$scope.winner = $scope.player;
				$scope.game = false;
			}
			// with current play as third space
			else if(col > 1 && col < 6 && row < 4 && row > 0 && $scope.board[row + 2][col - 2] == $scope.player && $scope.board[row + 1][col - 1] == $scope.player && $scope.board[row][col] == $scope.player && $scope.board[row - 1][col + 1] == $scope.player) {
				$scope.winner = $scope.player;
				$scope.game = false;
			}
			// with current play as second space
			else if(col > 1 && col < 5 && row < 5 && row > 1 && $scope.board[row + 1][col - 1] == $scope.player && $scope.board[row][col] == $scope.player && $scope.board[row - 1][col + 1] == $scope.player && $scope.board[row - 2][col + 2] == $scope.player) {
				$scope.winner = $scope.player;
				$scope.game = false;
			}
			// with current play as first space
			else if(row > 2 && col < 4 && $scope.board[row][col] == $scope.player && $scope.board[row - 1][col + 1] == $scope.player && $scope.board[row - 2][col + 2] == $scope.player && $scope.board[row - 3][col + 3] == $scope.player) {
				$scope.winner = $scope.player;
				$scope.game = false;
			}
		}	
		function diagonalLeftWin (row, col) {
			// top left to bottom right with current play as fourth space
			if(row > 2 && col > 2 && $scope.board[row - 3][col - 3] == $scope.player && $scope.board[row - 2][col - 2] == $scope.player && $scope.board[row - 1][col - 1] == $scope.player && $scope.board[row][col] == $scope.player) {
				$scope.winner = $scope.player;
				$scope.game = false;
			}
			// with current play as third space
			else if(row < 5 && row > 1 && col < 6 && col > 1 && $scope.board[row - 2][col - 2] == $scope.player && $scope.board[row - 1][col - 1] == $scope.player && $scope.board[row][col] == $scope.player && $scope.board[row + 1][col + 1] == $scope.player) {
				$scope.winner = $scope.player;
				$scope.game = false;
			}
			// with current play as second space
			else if(row < 4 && row > 0 && col < 5 && col > 0 && $scope.board[row - 1][col - 1] == $scope.player && $scope.board[row][col] == $scope.player && $scope.board[row + 1][col + 1] == $scope.player && $scope.board[row + 2][col + 2] == $scope.player) {
				$scope.winner = $scope.player;
				$scope.game = false;
			}
			// with current play as first space
			else if(row < 3 && col < 4 && $scope.board[row][col] == $scope.player && $scope.board[row + 1][col + 1] == $scope.player && $scope.board[row + 2][col + 2] == $scope.player && $scope.board[row + 3][col + 3] == $scope.player) {
				$scope.winner = $scope.player;
				$scope.game = false;
			}
		}
		function horizontalWin (row, col) {
			// fourth place
			if($scope.board[row][col] == $scope.player && $scope.board[row][col - 1] == $scope.player && $scope.board[row][col - 2] == $scope.player && $scope.board[row][col - 3] == $scope.player) {
				$scope.winner = $scope.player;
				$scope.game = false;
			}
			// first place
			else if($scope.board[row][col] == $scope.player && $scope.board[row][col + 1] == $scope.player && $scope.board[row][col + 2] == $scope.player && $scope.board[row][col + 3] == $scope.player) {
				$scope.winner = $scope.player;
				$scope.game = false;
			}
			// third place
			else if($scope.board[row][col - 2] == $scope.player && $scope.board[row][col - 1] == $scope.player && $scope.board[row][col] == $scope.player && $scope.board[row][col + 1] == $scope.player) {
				$scope.winner = $scope.player;
				$scope.game = false;
			}
			// second place
			else if($scope.board[row][col - 1] == $scope.player && $scope.board[row][col] == $scope.player && $scope.board[row][col + 1] == $scope.player && $scope.board[row][col + 2] == $scope.player) {
				$scope.winner = $scope.player;
				$scope.game = false;
			}
		}
		function verticalWin (row, col) {
			// check from top to bottom
			// need to check that row < 3 because first because there cant be vertical win with less than 4 rows in play.
			if(row < 3 && $scope.board[row][col] == $scope.player && $scope.board[row + 1][col] == $scope.player && $scope.board[row + 2][col] == $scope.player && $scope.board[row + 3][col] == $scope.player) {
				$scope.winner = $scope.player;
				$scope.game = false;
			}
		}

		function getWinner (row, col) {
			diagonalRightWin(row, col);
			diagonalLeftWin(row, col);
			horizontalWin(row, col);
			verticalWin(row, col);
			return;
		}

		// when a column is clicked it will place the current player's color
		// in the lowest cell possible of that column
		$scope.lowestCellinCol = function (col) {
			if($scope.game === true) {
				if($("#row5 .col"+ col).hasClass("empty")) {
					// displays in dom
					$("#row5 .col"+ col).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
					// puts into array board to be used for winner function 
					$scope.board[5][col] = $scope.player;
					// checks if the current move is a winning one
					getWinner(5, col);
					// changes the turn
					turn();
				} else if($("#row4 .col"+ col).hasClass("empty")) {
					$("#row4 .col"+ col).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
					$scope.board[4][col] = $scope.player;
					getWinner(4, col);
					turn();
				} else if($("#row3 .col"+ col).hasClass("empty")) {
					$("#row3 .col"+ col).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
					$scope.board[3][col] = $scope.player;
					getWinner(3, col);
					turn();
				} else if($("#row2 .col"+ col).hasClass("empty")) {
					$("#row2 .col"+ col).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
					$scope.board[2][col] = $scope.player;
					getWinner(2, col);
					turn();
				} else if($("#row1 .col"+ col).hasClass("empty")) {
					$("#row1 .col"+ col).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
					$scope.board[1][col] = $scope.player;
					getWinner(1, col);
					turn();
				} else if($("#row0 .col"+ col).hasClass("empty")) {
					$("#row0 .col"+ col).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
					$scope.board[0][col] = $scope.player;
					getWinner(0, col);
					turn();
				}
			}
		};

		$scope.playAgain = function() {
			$("td").removeClass("red").css('background-color', "white");
			$("td").removeClass("black");
			$("td").addClass("empty");
			$scope.board = [
			[null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null],
			];
			$scope.game = true;
		};

}]);
