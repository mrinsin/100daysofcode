// You will write a card counting function. It will receive a card parameter and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative. The current count and the player's decision ("Bet" or "Hold") should be separated by a single space.

// Example Output
// "-3 Hold"
// "5 Bet"


var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
       count -= 1;
       break;
  }

  currentCount = count.toString();

  if (count > 0) {
    return currentCount + ' Bet';
  } else if (count <= 0) {
    return currentCount + " Hold";
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.

// Setup
var myPlants = [
 {
   type: "flowers",
   list: [
     "rose",
     "tulip",
     "dandelion"
   ]
 },
 {
   type: "trees",
   list: [
     "fir",
     "pine",
     "birch"
   ]
 }
];


var secondTree = myPlants[1].list[1];

// If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

function multiplyAll(arr) {
  var product = 1;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

//
// Instead of generating a random number between zero and a given number like we did before, we can generate a random number that falls within a range of two specific numbers.
//
// To do this, we'll define a minimum number min and a maximum number max.
//
// Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:
//
// Math.floor(Math.random() * (max - min + 1)) + min
function randomRange(myMin, myMax) {

  return Math.floor(Math.random()* (myMax - myMin + 1)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(25, 3);
