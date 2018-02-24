console.log(strTerm = checkNum("Enter Starting term"));
console.log(comRatio = checkNum ("Enter common ratio"));
console.log(numOfItem = checkNum("Enter number of Items"));
console.log(strTerm);
for(var i=0; i<(numOfItem-1); i++) {
  console.log(strTerm *= comRatio);
}
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