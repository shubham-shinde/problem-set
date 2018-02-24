// var year = new Date().getFullYear();
// leaps = 0;
// while(leaps !=40) {
//   if (year%4===0) {
//     if (year%100===0) {
//       if (year%400===0) {
//         console.log(year)
//         leaps +=1;
//       }
//     }
//     else {
//       console.log(year);
//       leaps +=1;
//     }
//   }
//   year++;
// }
var year = new Date().getFullYear();
leaps = 0;

while(leaps!=40) {
  if(checkleap(year)) {
    console.log(year);
    leaps++;
  }
  year++;
}

function checkleap(year) {
  return (!(year%4) && (year%100 || !(year%400))) ? true: false;
}

