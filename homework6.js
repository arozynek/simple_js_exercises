var written = [];
var numbers = prompt("Wpisz liczby odzielone przecinkiem:");
console.log(numbers);

var written = numbers.split(',');

function onlyNumbers (numb) {
        return numb > Number.NEGATIVE_INFINITY;
}


function getAverage(array) {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }
    return sum / array.length;
  }

console.log('Średnia arytmetyczna z podanych liczb to: ');
console.log(getAverage(written.filter(onlyNumbers)));
