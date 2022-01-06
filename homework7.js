var firstWord = prompt('Podaj pierwsze słowo: ');
var secondWord = prompt('Podaj drugie słowo');

function anagram(word1,word2) {
  if (word1.length === word2.length) {
      if (sortString(firstWord) === sortString(secondWord)) {
      console.log('Podano anagram :) !');
    }
  } else {
    console.log('To nie jest anagram :(');
  }
}
function sortString(string){
  var lower = string.toLowerCase();
  var array = lower.split('');
  var sortedArray = array.sort();
  return sortedArray.join('');
}

anagram(firstWord,secondWord);
