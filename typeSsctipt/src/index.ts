/*function say(a:number,b:number):void{
   let c= a+b ;
     
}
 say(2,3) ;*/
 //enum
 enum gender{
  Male,Female,xyx
 }
 let gender1:gender=gender.Male
//console.log(gender1)
let arr1:[number,string]=[3,"rma "] ;
let arr:[number,number][]=[[1,2],[1,2]] ;
let get=<T>(arg:T):T=>{
return arg
}
let a:string='hello' ;
get<string>(a)