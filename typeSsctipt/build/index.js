/*function say(a:number,b:number):void{
   let c= a+b ;
     
}
 say(2,3) ;*/
//enum
var gender;
(function (gender) {
    gender[gender["Male"] = 0] = "Male";
    gender[gender["Female"] = 1] = "Female";
    gender[gender["xyx"] = 2] = "xyx";
})(gender || (gender = {}));
let gender1 = gender.Male;
//console.log(gender1)
let arr1 = [3, "rma "];
let arr = [[1, 2], [1, 2]];
let get = (arg) => {
    return arg;
};
let a = 'hello';
get(a);
//# sourceMappingURL=index.js.map