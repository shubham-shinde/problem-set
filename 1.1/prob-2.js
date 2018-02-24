var num = checkNum("Enter number to print table");

for (var i=1;i<11;i++) {
  console.log(num*i);
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
