class A{
    static a=0 ;
    constructor(b,c){
        A.a++ ;
    }
}
let d =new A()
let E =new A()
let F =new A()
console.log(A.a)