angular.module('cuatro').factory('Game', function (Board){
	var checkForWin=
	{
		diagonalRightWin: function (row, col, player) {
			// bottom left to top right with current play as fourth space
			if(row < 3 && col > 2 && Board.gameBoard[row + 3][col - 3] == player && Board.gameBoard[row + 2][col - 2] == player && Board.gameBoard[row + 1][col - 1] == player && Board.gameBoard[row][col] == player) {
				return true;
			}
			// with current play as third space
			else if(row < 4 && row > 0 && col < 6 && col > 1 && Board.gameBoard[row + 2][col - 2] == player && Board.gameBoard[row + 1][col - 1] == player && Board.gameBoard[row][col] == player && Board.gameBoard[row - 1][col + 1] == player) {
				return true;
			}
			// with current play as second space
			else if(row < 5 && row > 1 && col < 5 && col > 1 &&Board.gameBoard[row + 1][col - 1] == player && Board.gameBoard[row][col] == player && Board.gameBoard[row - 1][col + 1] == player && Board.gameBoard[row - 2][col + 2] == player) {
				return true;
			}
			// with current play as first space
			else if(row > 2 && col < 4 && Board.gameBoard[row][col] == player && Board.gameBoard[row - 1][col + 1] == player && Board.gameBoard[row - 2][col + 2] == player && Board.gameBoard[row - 3][col + 3] == player) {
				return true;
			}
		},
		diagonalLeftWin: function (row, col, player) {
			// top left to bottom right with current play as fourth space
			if(row > 2 && col > 2 && Board.gameBoard[row - 3][col - 3] == player && Board.gameBoard[row - 2][col - 2] == player && Board.gameBoard[row - 1][col - 1] == player && Board.gameBoard[row][col] == player) {
				return true;
			}
			// with current play as third space
			else if(row < 5 && row > 1 && col < 6 && col > 1 && Board.gameBoard[row - 2][col - 2] == player && Board.gameBoard[row - 1][col - 1] == player && Board.gameBoard[row][col] == player && Board.gameBoard[row + 1][col + 1] == player) {
				return true;
			}
			// with current play as second space
			else if(row < 4 && row > 0 && col < 5 && col > 0 && Board.gameBoard[row - 1][col - 1] == player && Board.gameBoard[row][col] == player && Board.gameBoard[row + 1][col + 1] == player && Board.gameBoard[row + 2][col + 2] == player) {
				return true;
			}
			// with current play as first space
			else if(row < 3 && col < 4 && Board.gameBoard[row][col] == player && Board.gameBoard[row + 1][col + 1] == player && Board.gameBoard[row + 2][col + 2] == player && Board.gameBoard[row + 3][col + 3] == player) {
				return true;
			}
		},
		horizontalWin: function (row, col, player) {
			// fourth place
			if(Board.gameBoard[row][col] == player && Board.gameBoard[row][col - 1] == player && Board.gameBoard[row][col - 2] == player && Board.gameBoard[row][col - 3] == player) {
				return true;
			}
			// first place
			else if(Board.gameBoard[row][col] == player && Board.gameBoard[row][col + 1] == player && Board.gameBoard[row][col + 2] == player && Board.gameBoard[row][col + 3] == player) {
				return true;
			}
			// third place
			else if(Board.gameBoard[row][col - 2] == player && Board.gameBoard[row][col - 1] == player && Board.gameBoard[row][col] == player && Board.gameBoard[row][col + 1] == player) {
				return true;
			}
			// second place
			else if(Board.gameBoard[row][col - 1] == player && Board.gameBoard[row][col] == player && Board.gameBoard[row][col + 1] == player && Board.gameBoard[row][col + 2] == player) {
				return true;
			}
		},
		verticalWin: function (row, col, player) {
			// check from top to bottom
			// need to check that row < 3 because first because there cant be vertical win with less than 4 rows in play.
			if(row < 3 && Board.gameBoard[row][col] == player && Board.gameBoard[row + 1][col] == player && Board.gameBoard[row + 2][col] == player && Board.gameBoard[row + 3][col] == player) {
				return true;
			}
		},
		checkForTie: function () {
			var playedCells = 0;
			for(var i = 0; i < Board.gameBoard.length; i++) {
				for(var j = 0; j < Board.gameBoard[i].length; j++) {
					if(Board.gameBoard[i][j] !== null) {
						playedCells += 1;
					}
				}
			}
			if(playedCells == 42) {
				$scope.winner = "There is a tie, no";
				$scope.game = false;
			}
		},
		winner: function (row, col, player) {
			 if(checkForWin.diagonalRightWin(row, col, player) ||
				checkForWin.diagonalLeftWin(row, col, player)  ||
				checkForWin.horizontalWin(row, col, player) ||
				checkForWin.verticalWin(row, col, player)) {
			 	return true;
			 }

		}
	};
	return checkForWin;
});

	

		

		

		

		