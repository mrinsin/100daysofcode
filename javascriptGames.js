// You will write a card counting function. It will receive a card parameter and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative. The current count and the player's decision ("Bet" or "Hold") should be separated by a single space.
//
// Example Output
// "-3 Hold"
// "5 Bet"
//
// Hint
// Do NOT reset count to 0 when value is 7, 8, or 9.


var count = 0;

function cc(card) {
  // Only change code below this line
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
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');

//
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

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line
