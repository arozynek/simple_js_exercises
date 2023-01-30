var firstWord = prompt("Podaj słowo lub zdanie: ");

function palindrome(word1) {
  if (sortString(word1) === notSortString(word1)) {
    console.log("Podano palindrom :) !");
  } else {
    console.log("To nie jest palindrom :(");
  }
}
function sortString(string) {
  var lower = string.toLowerCase();
  var array = lower.split("");
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[array.length - (i + 1)];
  }
  var lettersNewArray = newArray.filter(onlyLetters);
  return lettersNewArray.join('');
}
function notSortString(string) {
  var lower = string.toLowerCase();
  var array = lower.split("");
  var lettersArray = array.filter(onlyLetters);
  return lettersArray.join('');
}

palindrome(firstWord);

function onlyLetters (leter) {
  return leter !== ' ';
}
