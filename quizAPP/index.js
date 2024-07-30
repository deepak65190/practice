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
    //let c=a||"absent" ;
    let c=a||"absent"
    console.log(c)
  }
ab(0)
let arr=[1,2,3,1,2,3] ;
let obj={} ;
for(let i=0 ; i<arr.length ; i++){
  let char=arr[i] ;
  if(obj[char]==undefined){
    obj[char]=arr[i]
  }else{
    obj[char]+=1
  }
}
let arr2=[1,2,3,1,2,3] ;
let obj23
={} ;
for(let i=0 ; i<arr.length ; i++){
  let char=arr[i] ;
  if(obj[char]==undefined){
    obj[char]=arr[i]
  }else{
    obj[char]+=1
  }
}

console.log(obj) 

