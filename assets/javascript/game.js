$(document).ready(function(){
	//Vars to be referenced by Functions
		var compNumber = 0;
		var playerNumber = 0;
		var losses = 0;
		var wins = 0;
		var array =[];

	//On click funtions for the buttons


			$(".green").on("click", function(){
				playerNumber = (playerNumber + green); //Add the value of green to the players number
				console.log(playerNumber)
				$( "div.yourNumber" ).html( "<span>Your current value: </span>" + playerNumber); //Writes over the players number with the new number
				win (); //checks to see if player won the game
				notWin (); //checks to see if the player lost the game 

			});

			$(".red").on("click", function(){
				playerNumber = (playerNumber + red); //Add the value of red to the players number
				console.log(playerNumber)
				$( "div.yourNumber" ).html( "<span>Your current value: </span>" + playerNumber);
				win ();
				notWin ();
			});

			$(".clear").on("click", function(){
				playerNumber = (playerNumber + clear); //Add the value of clear to the players number
				console.log(playerNumber)
				$( "div.yourNumber" ).html( "<span>Your current value: </span>" + playerNumber);
				win ();
				notWin ();
			});

			$(".blue").on("click", function(){
				playerNumber = (playerNumber + blue); //Add the value of blue to the players number
				console.log(playerNumber)
				$( "div.yourNumber" ).html( "<span>Your current value: </span>" + playerNumber);
				win ();
				notWin ();
			});


			// This function resets the wins and losses on the page.

			$(".reset").on("click", function(){

				game();

				wins = 0; 
				$( "div.winsBox" ).html( "<span>Wins: </span>" + wins);


				losses = 0;
				$( "div.lossesBox" ).html( "<span>Losses: </span>" + losses);



			});


	//genorates random number to be picked
		game = function (min,max) {
			compNumber = Math.floor(Math.random()*(120-19+1)+19);
			console.log(compNumber)
								//stacker overflow code for random number generation between ranges
										// function randomIntFromInterval(min,max)
										// {
								  		//   		return Math.floor(Math.random)(*(max-min+1)+min);
										// }
										
			$( "div.compNumberBox" ).html( "<span> <strong> The computers number: </strong> </span>" + compNumber); //Writes the computer number to the screen


			playerNumber = 0;
			console.log(playerNumber)
			

			$( "div.yourNumber" ).html( "<span>Your current value: </span>" + playerNumber);

			gameArray (); //gameArray is located below the teachers code for random array generation. Game array generates the 4 random numbers that will be assigned to the crystals
		}
		
	
		//Checks players number and Computers Number and updates page if they are equal.
		win = function(){

		if (compNumber == playerNumber) {

			wins = wins + 1;

			$( "div.winsBox" ).html( "<span>Wins: </span>" + wins);

			game ();
			}

		else {}

		}

		//Checks to see if players number is greater than the computers number and updates the page if this sad event happens.
		notWin = function(){

			if (compNumber < playerNumber) {

				losses = losses + 1;

				$( "div.lossesBox" ).html( "<span>Losses: </span>" + losses);

				game ();
				}


			else {}
		
			}



		





	//teachers code for generating random arrays of different types: Awesome.		
	//Random array of numbers genorator
		var genArrayOfRandomNumbers = {

		    numberArr: [],
		    numbersInArray: 4,
		    numbersInArrayCounter: 0,
		    numberBegin: 1,
		    numberEnd: 12,
		    typeOfArray: "evenAndOdd", // Accepts oddOnly, evenOnly, & evenAndOdd
		    resetFlag: true,
		    randomNumber: 0,
		    debugFlag: false,


		    /**
		     * Create and Populate the Array
		     */
		    populateArrayWhile: function() {

		        if (this.resetFlag) {
		            this.numbersInArrayCounter = this.numbersInArray
		            this.debug(console.log("Amount of Beginning Numbers: " + this.numbersInArray))
		            console.log("Type of Array Selected: " + this.typeOfArray)
		            console.log("------------------------");

		            this.resetFlag = false

		        } else {
		            console.log("Amount of Numbers Remaining: " + this.numbersInArrayCounter)
		            console.log("------------------------");
		        }

		        while (this.numbersInArrayCounter > 0) {
		            this.generateRandomNumber(this.numberArr, this.typeOfArray)
		            this.numberArr.push(this.randomNumber)
		            console.log("Random Number: " + this.randomNumber + " -- Pushed to Array")
		            this.numbersInArrayCounter--
		                console.log("Current Numbers Left to Generate in Array: " + this.numbersInArrayCounter)
		        }

		        if (this.typeOfArray == "evenAndOdd") {
		            if (this.arrayEvenAndOdd(this.numberArr) instanceof Array) {
		                return this.numberArr
		            } else {
		                this.reset()
		                this.populateArrayWhile()
		            }
		        }

		        return this.numberArr

		    },

		    /**
		     * Generates a random number, or random odd number or random even number
		     * @param {Array} a items The array containing the items.
		     * @param {typeOfArray} is the array oddOnly, evenOnly, or evenAndOdd.
		     */
		    generateRandomNumber: function(arr, typeOfArray) {

		        var num = Math.floor(this.numberBegin + (Math.random() * this.numberEnd))
		        console.log("Random Number Generated: " + num)

		        if (typeOfArray == "oddOnly" && (num % 2 > 0) && this.duplicateChecker(arr, num)) {
		            this.randomNumber = num
		            console.log("Passed Duplicate Checker: " + num)
		            console.log("------------------------")

		        } else if (typeOfArray == "evenOnly" && (num % 2 == 0) && this.duplicateChecker(arr, num)) {
		            this.randomNumber = num
		            console.log("Passed Duplicate Checker: " + num)
		            console.log("------------------------")

		        } else if (typeOfArray == "evenAndOdd" && this.duplicateChecker(arr, num)) {
		            this.randomNumber = num
		            console.log("Passed Duplicate Checker: " + num)
		            console.log("------------------------")

		        } else {
		            console.log("Duplicate or Non Qualified Number Selected: Generating another number")
		            console.log("------------------------")
		            this.generateRandomNumber(arr, typeOfArray)

		        }

		        return

		    },

		    /**
		     * Checks if any Array element contains a given number
		     * @param {Array} a items The array containing the items.
		     * @param {Number} a number to compare if exists in array.
		     */
		    duplicateChecker: function(arr, num) {

		        if (arr.indexOf(num) === -1) {
		            return true

		        } else {
		            return false
		        }

		    },

		    /**
		     * Checks Array Elements for Even and Odd Numbers
		     * @param {Array} a items The array containing the items.
		     */
		    arrayEvenAndOdd: function(arr) {

		        console.log("Checking Array Elements for Even and Odd Numbers....")

		        var odd = false
		        var even = false

		        for (j = 0; j < arr.length; j++) {

		            if (arr[j] % 2 === 0) {
		                even = true
		                console.log("Index: " + j + " Element: " + arr[j] + " ---- Even")

		            } else {
		                odd = true
		                console.log("Index: " + j + " Element: " + arr[j] + " ---- Odd")
		            }
		        }

		        if (odd && even) {
		            console.log("Array OK Even and Odd Numbers Found...")
		            return arr

		        } else {
		            console.log("Array Not OK!! All Odd or All Even...")
		            return false
		        }
		    },

		    reset: function() {
		        this.numberArr = []
		        this.numbersInArrayCounter = 0
		        this.resetFlag = true
		        this.randomNumber = 0
		    },

		    debug: function(consoleLog) {

		        if (this.debugFlag) {
		            consoleLog
		        }
		    }
		}


		// // Testing
		// // Set Runtime Values
		// genArrayOfRandomNumbers.numberBegin = 10
		// genArrayOfRandomNumbers.numberEnd = 100
		// genArrayOfRandomNumbers.numbersInArray = 10
		// genArrayOfRandomNumbers.typeOfArray = "evenOnly" // Accepts oddOnly, evenOnly, & evenAndOdd

		// // Create a Do-While Loop to Determine the Number of Passes
		// var numOfPasses = 10
		// var i = 0
		// do {

		//     console.log("")
		//     console.log("--------------------BEGIN-------------------")
		//     console.log("--------------------------------------------")
		//     var arrayNumbers = genArrayOfRandomNumbers.populateArrayWhile()
		//     console.log("--------------------------------------------")
		//     console.log("Test " + (i+1) + " -- Final Result: ")
		//     console.log(arrayNumbers)
		//     genArrayOfRandomNumbers.reset()
		//     console.log("---------------------END--------------------")
		//     console.log("")

		//     i++

		// } while (i < numOfPasses)

		//commented out teachers test run and this is where his code ends.


		//Game array uses the above functions to created our 4 random numbers to assign to the crystals

		gameArray =  function(){

			genArrayOfRandomNumbers.numberBegin = 1;
			genArrayOfRandomNumbers.numberEnd = 12;
			genArrayOfRandomNumbers.numbersInArray = 4;
			genArrayOfRandomNumbers.typeOfArray = 'evenAndOdd';
			
				var numOfPasses = 10
				var i = 0
				do {

				    console.log("")
				    console.log("--------------------BEGIN-------------------")
				    console.log("--------------------------------------------")
				    arrayNumbers = genArrayOfRandomNumbers.populateArrayWhile()
				    console.log("--------------------------------------------")
				    console.log("Test " + (i+1) + " -- Final Result: ")
				    console.log(arrayNumbers)
				    genArrayOfRandomNumbers.reset()
				    console.log("---------------------END--------------------")
				    console.log("")

				    i++

				} while (i < numOfPasses)





			
			console.log(arrayNumbers)

		}

		//runs the game function (and all functions included in it)
		game ();

		//sets the value of the crystals = to the random number in the array by possition.
		var red = arrayNumbers[0];
		var blue = arrayNumbers[1];
		var clear = arrayNumbers[2];
		var green = arrayNumbers[3];
		console.log(red)
		console.log(blue)
		console.log(clear)
		console.log(green)
		

});

			