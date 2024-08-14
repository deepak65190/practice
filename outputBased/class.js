class Student{
    constructor(name1 ,age,roll){
        this.name1=name1 ;
        this.age=age ;
        this.roll=roll ;
    }
}
class Teacher extends Student{
    constructor(salary ,jod ,id){
        super(name1 ,age)
        this.salary=salary ;
        this.jod=jod ;
        this.id=id ;
    }
    
}
let Student_data=new Student("ram",20,20225) ;
console.log(Student_data.name1) ;
let teacher_data=new Student("rahul",20,30000,599498) ;
console.log(teacher_data.name1) ;