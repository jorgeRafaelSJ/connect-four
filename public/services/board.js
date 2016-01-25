angular.module('cuatro').factory('boardFactory',['playerFactory', function(playerFactory) {

	function Board(rows,columns) {

			this.gameBoard = [];
			this.rows = rows;
			this.columns = columns;
			this.playCount = 0;
			this.winner = null;
			this.player1 = new playerFactory.player("red");
			this.player2 = new playerFactory.player("black");
			this.playerInTurn = this.player1;

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
					return false;
				}
			};
			this.findWinner = function (row, col, player) {
				this.playCount ++;
				if(this.diagonalRightWin(row, col, player) ||
					this.diagonalLeftWin(row, col, player)  ||
					this.horizontalWin(row, col, player) ||
					this.verticalWin(row, col, player)) {
					return true;
				}
 			};
 			this.turn = function () {
				if(this.playCount % 2 === 0){
					// red player
					this.playerInTurn = this.player1;
				} else {
					// black player
					this.playerInTurn = this.player2;
				}
	 		};

	 		// when a column is clicked it will place the current player's color
	 		// in the lowest cell possible of that column
	 		this.lowestCellinCol = function (col) {
	 			for (var i = 5; i >= 0; i--) {
	 				if(this.winner === null) {
	 					if($("#row" + i +  " .col"+ col).hasClass("empty")) {
	 						// displays in dom
	 						$("#row" + i +  " .col"+ col).css('background-color', this.playerInTurn.color).removeClass("empty").addClass(this.playerInTurn.color);
	 						// puts into array board to be used for winner function 
	 						this.gameBoard[i][col] = this.playerInTurn.color;
	 						// checks if the current move is a winning one
	 						if(this.findWinner(i, col, this.playerInTurn.color)) {
	 							// if there is a winner set it to the current player because this is checked on every turn
	 							this.winner = this.playerInTurn.color;
	 							
	 						}
	 						// changes the turn
	 						this.turn();
	 						$('.turn-text').css('color', this.playerInTurn.color);
	 						return;
	 					}
	 				}
	 			}
	 		};
	 	}

	return {
	  	Board:Board
	};
}]);
 
	 