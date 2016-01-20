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
				$('.turn-text').css('color',"red");
			} else {
				$scope.player = "black";
				$('.turn-text').css('color',"black");
			}
			turnCount++;
		}

		function diagonalRightWin (row, col) {
			// bottom left to top right with current play as fourth space
			if(row < 3 && col > 2 && $scope.board[row + 3][col - 3] == $scope.player && $scope.board[row + 2][col - 2] == $scope.player && $scope.board[row + 1][col - 1] == $scope.player && $scope.board[row][col] == $scope.player) {
				$scope.winner = $scope.player;
				$scope.game = false;
			}
			// with current play as third space
			else if(row < 4 && row > 0 && col < 6 && col > 1 && $scope.board[row + 2][col - 2] == $scope.player && $scope.board[row + 1][col - 1] == $scope.player && $scope.board[row][col] == $scope.player && $scope.board[row - 1][col + 1] == $scope.player) {
				$scope.winner = $scope.player;
				$scope.game = false;
			}
			// with current play as second space
			else if(row < 5 && row > 1 && col < 5 && col > 1 &&$scope.board[row + 1][col - 1] == $scope.player && $scope.board[row][col] == $scope.player && $scope.board[row - 1][col + 1] == $scope.player && $scope.board[row - 2][col + 2] == $scope.player) {
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

		function checkForTie () {
			var playedCells = 0;
			for(var i = 0; i < $scope.board.length; i++) {
				for(var j = 0; j < $scope.board[i].length; j++) {
					if($scope.board[i][j] !== null) {
						playedCells += 1;
					}
				}
			}
			if(playedCells == 42) {
				$scope.winner = "There is a tie, no";
				$scope.game = false;
			}
		}

		function getWinner (row, col) {
			diagonalRightWin(row, col);
			diagonalLeftWin(row, col);
			horizontalWin(row, col);
			verticalWin(row, col);
			checkForTie();
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

		// resets board 
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
			$scope.player = "red";
			$('.turn-text').css('color',"red");
			turnCount = 1;
			$scope.game = true;
		};


		// adds hovering effect to column
		// THERE HAS TO BE A BETTER WAY TO DO THIS 
		// things I've tried:
		// [class^=col] in  -- but then cant use this because it only selects hovered td(table data)
		// ng-hover with function sending col # and adding jQuery here -- does not work at all
		// 

		$(".col0").on('mouseenter', function () {
			$(".col0").addClass('hovering');
		}).on('mouseleave', function () {
			$(".col0").removeClass('hovering');
		});
		$(".col1").on('mouseenter', function () {
			$(".col1").addClass('hovering');
		}).on('mouseleave', function () {
			$(".col1").removeClass('hovering');
		});
		$(".col2").on('mouseenter', function () {
			$(".col2").addClass('hovering');
		}).on('mouseleave', function () {
			$(".col2").removeClass('hovering');
		});
		$(".col3").on('mouseenter', function () {
			$(".col3").addClass('hovering');
		}).on('mouseleave', function () {
			$(".col3").removeClass('hovering');
		});
		$(".col4").on('mouseenter', function () {
			$(".col4").addClass('hovering');
		}).on('mouseleave', function () {
			$(".col4").removeClass('hovering');
		});
		$(".col5").on('mouseenter', function () {
			$(".col5").addClass('hovering');
		}).on('mouseleave', function () {
			$(".col5").removeClass('hovering');
		});
		$(".col6").on('mouseenter', function () {
			$(".col6").addClass('hovering');
		}).on('mouseleave', function () {
			$(".col6").removeClass('hovering');
		});


}]);
