// Find the maximum
function maxOfTwoNumbers (a,b) {
  if (a > b)
  return a
  if (a < b)
  return b
  if (a = b)
  return a,b
 }



// Finding Longest Word
var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
]

function findLongestWord(array) {
  let longest = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
     longest = array[i];
    }
  }

  return longest;
}

console.log(findLongestWord(words))



// Calculating a Sum
var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element){
        total += element;
    })
    return total;
}

console.log(sumArray(numbers))



// Calculating the Average
var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function average(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++){
      total += arr[i];
  }
  return total / arr.length;
}

console.log(average(numbersAvg))



// Array of Strings
var wordsArr = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

function calculate(wordsArr){
  var wordsTotalCount = 0;
    for(i = 0; i < wordsArr.length; i++) {
  // console.log('wordsArr[i].length', wordsArr[i].length)
    wordsTotalCount += wordsArr[i].length;
    
    }
    //console.log('wordsTotalCount', wordsTotalCount)
    var wordsTotalCountAve = wordsTotalCount / wordsArr.length;
    return wordsTotalCountAve ;

  }
  console.log(calculate(wordsArr))



// Unique Arrays
var wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(array) {
  var result = Array.from(new Set(array));
  return result    
}
console.log(uniquifyArray(wordsUnique))


  
// Finding Elements
var wordsFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

function doesWordExist(array,searched){
  var exists=0;
  for (i=0;i<array.length;i++){
    if(array[i]===searched){
      exists=1;
    }
  }
  if(exists===1){
    return true;
  }else{
    return false;
  }
}

doesWordExist(wordsFind,'trouble')

console.log(doesWordExist(wordsFind,'trouble'))



// Counting Repetion
var wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimes(arr, word){
  var timesAppearing=0;
  for (i=0; iCarr.length; i++){
  if (arr[i]===word){
  timesAppearing+=1;
  }
  return timesAppearing
  }
  
  function howManyTimes(array,palabra){
    // Your code here
      var times=0;
    for (i=0;i<array.length;i++){
      if(array[i]===palabra){
        times++;
      }
    }
    return times;
  }
  var howManyMatter = howManyTimes(words, "matter");
  console.log(howManyMatter);
  // 4
  
  var howManyDog = howManyTimes(words, "dog");
  console.log(howManyDog);
  // 0
}
