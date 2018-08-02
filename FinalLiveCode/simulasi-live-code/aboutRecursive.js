// Here is the function using a for loop
function countSheepWithLoop(number) {    
    for (i = 1; i <= number; i++) {
      if (i === number) {
        console.log("Zzzzzz");
      }
      console.log("Another sheep jumps over the fence.");
    }
  }
  
  // And here is the recursive function
  function countSheep(number) {
    if (number === 0) {
      // Put your base case here
      console.log('Zzzzzz');
    } else {
      console.log("Another sheep jumps over the fence.");
      // Define the variable newNumber as 
      // 1 less than the input variable number
      newNumber = number - 1;
      // Recursively call the function
      // with newNumber as the parameter
      countSheep(newNumber);
    }
  }
  
  // Call your new recursive function:
  countSheep(5);
  
  
  
  function guessNumber(number) {
    // Prompt the user for a number
    guess = prompt('Guess a number between 1 and 100');
      
    // Convert their guess to a number using +
    guess = +guess;
  
    // Define base case
    if (guess === number) {
      return console.log("You got it! The number was " + number);
    }
    // Define recursive case with a function call
     guessNumber(number);
  }
  
  // Call the function guessNumber() with an integer for an argument
  guessNumber(5);
  
  
  
  //a harder example: It's okay if you don't know this yet. Don't worry:
  
  // Create an empty array called "stack"
  
  // Here is our recursive function
  function power(base, exponent) {
    // Base case 
    if ( exponent === 0 ) {
      return 1;
    }
    // Recursive case
    else {
      stack[exponent-1] = base * power(base, exponent - 1);
      return stack[exoponent-1];
    }
  }
  
  var stack = [];
  
  
  ////////////A good example://////////
  
  
  
  // Our array of messy words
  var capitals = ["berlin", "parIs", "MaDRiD"];
  
  // Capitalize function
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  
  // Our recursive function
  function fixLetterCase(array, i) {    
    // Base case
    if (i === array.length) {
      return;
    } 
    // Action
    array[i] = capitalize(array[i]);
    // Recursive case
    return fixLetterCase(array, i + 1);
  }
  
  // Here is our function call
  fixLetterCase(capitals, 0);
  
  console.log(capitals);
  
  
  //////////////////Another hard one:
  
  var capitals = [ ["berlin", "parIs", "MaDRiD"], 
                   ["monTEvideo", "BrASiLia"],
                   ["dElhi", "toKYo", "BeiJing"],
                   ["CanBerra"],
                   ["kiGaLi", "pretoRIA"] ];
  
  // Capitalize function
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  
  // Our recursive function
  function fixLetterCase(array, x, y) {
    if (y === array.length) {
      return;
    }
    else if (x === array[y].length) {
      return fixLetterCase(array, 0, y + 1);
    }
    else {
      array[y][x] = capitalize(array[y][x]);
      return fixLetterCase(array, x + 1, y);
    }	
  }
  
  fixLetterCase(capitals, 0, 0);
  
  console.log(capitals);
  
  
  ////////////
  // One last problem to solve! This one's got some good stuff: modifying arrays, multiple parameters, a two-line recursive case.
  
  // The function multiplesOf takes two parameters: base and the i, which represents how many times the base should be multiplied. It should return an array of those multiples, starting with base.
  
  // Each recursion will count down from i to 0, so we know that the recursion will be complete when i is equal to 0.
  
  
  
  // Here is the array we will store results in
  var multiples = [];
  
  function multiplesOf(base, i) {
    // Base case
    if (i === 0) {
      // Write the array multiples to the console
      console.log(multiples);
    }
    // Recursive case
    else {
      multiples[i - 1] = base * i;
      // Add a recursive function call
      multiplesOf(base, i - 1);
    }
  }
  
  multiplesOf(5, 4);
  
  ////////a loop alternative:
  
  var multiples = [];
  var base = 4;
  
  for(var i = 1; i <= base; i++){
    multiples.push(i * 5);
  }
  
  console.log(multiples);