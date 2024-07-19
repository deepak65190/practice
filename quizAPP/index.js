let a = 20;
let b = 20;
let c = 1;
if ((a == b) == c) {
  console.log(true);
} else {
  console.log(false);
}
c=0 ;
if ((a == b) == c) {
    console.log(true);
  } else {
    console.log(false);
  }
  function ab(a){
    let c=a||"absent" ;
    console.log(c)
  }
ab(0)