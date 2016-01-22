angular.module('cuatro').service( 'playAgain',[ 'boardFactory', function (boardFactory) {
	return {
		// resets board on the dom
		reset : function() {
			// resets table on view
			$("td").removeClass("red").css('background-color', "white");
			$("td").removeClass("black");
			$("td").addClass("empty");
			// changes the color of the turn text
			$('.turn-text').css('color',"red");
			return;
		}		
	};
}]);
