#Cuatro
###Connect Four Game 
#####Built with the EAN Stack
Express | AngularJS | Node.js 

To run locally on your computer install the following node modules:

* ejs
* express

run "node server.js" (or nodemon) on your terminal and visit "localhost:3000"


Things I need to learn more about:

* Difference between using $scope or setting variables to 'this' on the controller. I can see that when you set the controller 'as something' in html, then you can access the same variables as 'something.variable'

* Need to understand how to implement ng-repeat tracking by index to make the board/table html more concise


##### controllers:

GameController - interacts with the board. Has the following functions:
	
	makeMove - places the move on the board object and checks for winner
	playAgain - resets the board view and starts a new instance of the board factory
	hovering - adds css borders to the column being hovered

##### services: 

	playerFactory - constructor for player instances.  
	boardFactory - has functions to create a new board intance, players, find winners, and change turns.
	colHover (service) - has function to add hovering class to column on ngHover. 
	playAgain (service) - has function that resets the view board.

##### directives: 

	board-container - has the table for the game
	rules-container - game rules
	welcome-container - welcome text and turn information




