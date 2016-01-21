angular.module('cuatro')
	.controller('GameController', ['$scope','Board','Game', function ($scope, Board, Game) {
		
		var turnCount = 1;
		// red starts the game
		$scope.player = "red";
		$scope.winner = null;
		$scope.game = true;
		Board.gameBoard = Board.setEmpty();

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

		// when a column is clicked it will place the current player's color
		// in the lowest cell possible of that column
		$scope.lowestCellinCol = function (col) {
			if($scope.game === true) {
				if($("#row5 .col"+ col).hasClass("empty")) {
					// displays in dom
					$("#row5 .col"+ col).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
					// puts into array board to be used for winner function 
					Board.gameBoard[5][col] = $scope.player;
					// checks if the current move is a winning one
					if(Game.winner(5, col, $scope.player)) {
						$scope.winner = $scope.player;
						$scope.game = false;
					}
					// changes the turn
					turn();
				} else if($("#row4 .col"+ col).hasClass("empty")) {
					$("#row4 .col"+ col).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
					Board.gameBoard[4][col] = $scope.player;
					if(Game.winner(4, col, $scope.player)) {
						$scope.winner = $scope.player;
						$scope.game = false;
					}
					turn();
				} else if($("#row3 .col"+ col).hasClass("empty")) {
					$("#row3 .col"+ col).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
					Board.gameBoard[3][col] = $scope.player;
					if(Game.winner(3, col, $scope.player)) {
						$scope.winner = $scope.player;
						$scope.game = false;
					}
					turn();
				} else if($("#row2 .col"+ col).hasClass("empty")) {
					$("#row2 .col"+ col).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
					Board.gameBoard[2][col] = $scope.player;
					if(Game.winner(2, col, $scope.player)) {
						$scope.winner = $scope.player;
						$scope.game = false;
					}
					turn();
				} else if($("#row1 .col"+ col).hasClass("empty")) {
					$("#row1 .col"+ col).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
					Board.gameBoard[1][col] = $scope.player;
					if(Game.winner(1, col, $scope.player)) {
						$scope.winner = $scope.player;
						$scope.game = false;
					}
					turn();
				} else if($("#row0 .col"+ col).hasClass("empty")) {
					$("#row0 .col"+ col).css('background-color', $scope.player).removeClass("empty").addClass($scope.player);
					Board.gameBoard[0][col] = $scope.player;
					if(Game.winner(0, col, $scope.player)) {
						$scope.winner = $scope.player;
						$scope.game = false;
					}
					turn();
				}
			}
		};

		// resets board 
		$scope.playAgain = function() {
			$("td").removeClass("red").css('background-color', "white");
			$("td").removeClass("black");
			$("td").addClass("empty");
			Board.gameBoard = Board.setEmpty();
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
