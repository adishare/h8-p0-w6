var stack = [];

function countDown(int) {
  stack.push(int);
  //console.log("stack:", stack)
  if (int === 1) {	
    return 1;
  }
    return countDown(int - 1);
}

function multiplyEach() {
  // Remove the last value of the stack 
  // and assign it to the variable int
  int = stack.pop(); // int = 1 // int = 2
  console.log("int:", int)
  x = stack.length; //x = 6 // x = 5
  // Base case
  if (x === 1) {
    return int;
  }
  // Recursive case
  else {
	stack[x - 1] = int * stack[x - 1]; // stack[x-1] = 2 // stack[x-1] = 2 * 4
	console.log("stack[x-1]: ", stack[x-1]);
	return multiplyEach();
  }
}

// Call the function countDown(7)
countDown(7);
// And then print out the value returned by multiplyEach()
console.log(multiplyEach());


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
      //console.log("y:", y)
      //console.log("array.length:" , array.length)
    return;
  }
  else if (x === array[y].length) {
      //console.log("x:", x)
      //console.log("array[y].length:", array[y].length)
    return fixLetterCase(array, 0, y + 1);
  }
  else {
    array[y][x] = capitalize(array[y][x]);
    return fixLetterCase(array, x + 1, y);
  }	
}

fixLetterCase(capitals, 0, 0);

console.log(capitals);


// Here is the array we will store results in
var multiples = [];

function multiplesOf(base, i) {
  // Base case
  if (i === 0) {
	// Write the array multiples to the console
	return multiples;
  }
  // Recursive case
  else {
    multiples[i-1] = base * i;
    console.log("base:", base,  "i: ", i);
    //console.log
    console.log("multiples: ", multiples)
	// Add a recursive function call
	multiplesOf(base, i - 1);
  }	
}

multiplesOf(3, 3);


/*
Create a function using recursion called numToText which takes a
string and returns a new string with all numeric numbers from the
input string converted to their corresponding text words. You can
assume that the numbers in the string are single digit nubmers.
Can you implement this function in two different ways?
One way involves creating an inner helper function (or subroutine),
the other way does not use an inner function.
Extra Credit: Have the function handle numbers of any digit size.
Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"
*/

var numToText = function(str) {
    //create an object with num: value pair
    var myObj = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        0: 'zero'
    };
    //create variable set result to empty string
    var result = "";
    
var createNewString = function(string) {
  //base case
    if (string.length === 0) {
        return result;
    } else {
        var currentChar = string.charAt(0);
        if(myObj[currentChar]) {
            result = result + myObj[currentChar]
        }
        else {
            result = result + currentChar;
        }
    //return the recursive function with the substring 
        return createNewString(string.slice(1));
        }
    }
    //call the recursive helper with str as input
    createNewString(str);    
    //finally return the result
    return result;
};
numToText("I have 5 dogs and 6 ponies");



var numToText = function(str) {
    //create an object with num: value pair
    var myObj = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        0: 'zero'
    };
    //create variable set result to empty string
    var result = "";
    
//var createNewString = function(string) {
  //base case
    if (str.length === 0) {
        return result;
    } else {
        var currentChar = str.charAt(0);
        //console.log(str)
        if(myObj[currentChar]) {
            result = result + myObj[currentChar]
        }
        else {
            result = result + currentChar;
        }
        //console.log(myObj[currentChar])
        //console.log("numToText(str.slice(1)): ", numToText(str.slice(1)))
    //return the recursive function with the substring 
        return result + numToText(str.slice(1));
        }
    //}
    //call the recursive helper with str as input
    //createNewString(str);    
    //finally return the result
    //return result;
};
numToText("I have 5 dogs and 6 ponies");

// 4. Write a JavaScript program to compute the sum of an array of integers. Go to the editor
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21 

function sum (arr) {
    //base case
    var result = 0;
    if (arr.length === 1) {
        return arr[0];
    } else {
        result = arr.pop() + sum(arr);
        return result;
    }
    
}

sum([1,2,3,4,5,6])
