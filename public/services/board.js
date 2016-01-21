angular.module('cuatro').factory('boardFactory', function() {

	function Board(rows,columns) {

			this.gameBoard = [];
			this.rows = rows;
			this.columns = columns;

			// initiates empty board by pushing 
			this.initiate = function() {
				for(var i=0; i < this.rows; i++){
					this.gameBoard.push(new Array(7));
				}				
			};
			// clears the board
			this.clear = function() {
				for(var i = 0; i < this.rows; i++){
					for(var j = 0; j < this.rows; j++){
						this.gameBoard[i][j] = null;
					}
				}
			};	

			this.diagonalRightWin = function (row, col, player) {
				// bottom left to top right with current play as fourth space
				if(row < 3 && col > 2 && this.gameBoard[row + 3][col - 3] == player && this.gameBoard[row + 2][col - 2] == player && this.gameBoard[row + 1][col - 1] == player && this.gameBoard[row][col] == player) {
					return true;
				}
				// with current play as third space
				else if(row < 4 && row > 0 && col < 6 && col > 1 && this.gameBoard[row + 2][col - 2] == player && this.gameBoard[row + 1][col - 1] == player && this.gameBoard[row][col] == player && this.gameBoard[row - 1][col + 1] == player) {
					return true;
				}
				// with current play as second space
				else if(row < 5 && row > 1 && col < 5 && col > 1 &&this.gameBoard[row + 1][col - 1] == player && this.gameBoard[row][col] == player && this.gameBoard[row - 1][col + 1] == player && this.gameBoard[row - 2][col + 2] == player) {
					return true;
				}
				// with current play as first space
				else if(row > 2 && col < 4 && this.gameBoard[row][col] == player && this.gameBoard[row - 1][col + 1] == player && this.gameBoard[row - 2][col + 2] == player && this.gameBoard[row - 3][col + 3] == player) {
					return true;
				}
			};
			this.diagonalLeftWin = function (row, col, player) {
				// top left to bottom right with current play as fourth space
				if(row > 2 && col > 2 && this.gameBoard[row - 3][col - 3] == player && this.gameBoard[row - 2][col - 2] == player && this.gameBoard[row - 1][col - 1] == player && this.gameBoard[row][col] == player) {
					return true;
				}
				// with current play as third space
				else if(row < 5 && row > 1 && col < 6 && col > 1 && this.gameBoard[row - 2][col - 2] == player && this.gameBoard[row - 1][col - 1] == player && this.gameBoard[row][col] == player && this.gameBoard[row + 1][col + 1] == player) {
					return true;
				}
				// with current play as second space
				else if(row < 4 && row > 0 && col < 5 && col > 0 && this.gameBoard[row - 1][col - 1] == player && this.gameBoard[row][col] == player && this.gameBoard[row + 1][col + 1] == player && this.gameBoard[row + 2][col + 2] == player) {
					return true;
				}
				// with current play as first space
				else if(row < 3 && col < 4 && this.gameBoard[row][col] == player && this.gameBoard[row + 1][col + 1] == player && this.gameBoard[row + 2][col + 2] == player && this.gameBoard[row + 3][col + 3] == player) {
					return true;
				}
			};
			this.horizontalWin = function (row, col, player) {
				// fourth place
				if(this.gameBoard[row][col] == player && this.gameBoard[row][col - 1] == player && this.gameBoard[row][col - 2] == player && this.gameBoard[row][col - 3] == player) {
					return true;
				}
				// first place
				else if(this.gameBoard[row][col] == player && this.gameBoard[row][col + 1] == player && this.gameBoard[row][col + 2] == player && this.gameBoard[row][col + 3] == player) {
					return true;
				}
				// third place
				else if(this.gameBoard[row][col - 2] == player && this.gameBoard[row][col - 1] == player && this.gameBoard[row][col] == player && this.gameBoard[row][col + 1] == player) {
					return true;
				}
				// second place
				else if(this.gameBoard[row][col - 1] == player && this.gameBoard[row][col] == player && this.gameBoard[row][col + 1] == player && this.gameBoard[row][col + 2] == player) {
					return true;
				}
			};	
			this.verticalWin = function (row, col, player) {
				// check from top to bottom
				// need to check that row < 3 because first because there cant be vertical win with less than 4 rows in play.
				if(row < 3 && this.gameBoard[row][col] == player && this.gameBoard[row + 1][col] == player && this.gameBoard[row + 2][col] == player && this.gameBoard[row + 3][col] == player) {
					return true;
				}
			};	
			this.checkForTie = function () {
				var playedCells = 0;
				for(var i = 0; i < this.gameBoard.length; i++) {
					for(var j = 0; j < this.gameBoard[i].length; j++) {
						if(this.gameBoard[i][j] !== null) {
							playedCells += 1;
						}
					}
				}
				if(playedCells == 42) {
					$scope.winner = "There is a tie, no";
					$scope.game = false;
				}
			};
			this.winner = function (row, col, player) {
				if(this.diagonalRightWin(row, col, player) ||
					this.diagonalLeftWin(row, col, player)  ||
					this.horizontalWin(row, col, player) ||
					this.verticalWin(row, col, player)) {
					return true;
				}
 			};
 		}
	return {
	  	Board:Board
	};
});
 
	 