//num = prompt('Enter Number');
//console.log(!isNaN(num) ? (num<0 ? console.log('Entered number is negative'): num%2) : console.log('no number detected'));
var num = checkNum("Enter number to check sum");
var sum = 0;

for (var i=1; i<num+1; i++) {
    if (i%2) {
        sum += +1;
    }
    else {
        sum += -1;
    }
}
console.log(sum);


function checkNum(msg) {
    var string = prompt(msg+'  number should be positive');
  if(string) {
    if(!isNaN(string)) {
      if (string>0) {
        return Math.floor(Number(string));
      }
      else {
        checkNum('Number was negative enter again')
      }
    }
    else {
      return checkNum('plese inter Valid number');
    }
  }
  else {
    return checkNum('Enter Valid number');
  } 
  }
  