string = prompt('Enter your sentence to check logest number in it');
console.log(string);
var words = string.split(' ');
var largest = 0;
for(var i=0; i<words.length; i++) {
  words[i].length>=largest ? largest = words[i].length : largest = largest ;
}
console.log(largest);