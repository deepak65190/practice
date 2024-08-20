const mongoose=require("mongoose") ;
const userSchema=mongoose.Schema({
    name:{
        type:String ,
        require:true
    } ,
    email:{
        type:String ,
        unique:true ,
        require:true
    } ,
    password:{
        type:String ,
        require:true
    } ,
    pic:{
        type:String ,
        
        default:"https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
    }
} ,{timestamps:true}) ;

const User=mongoose.model("User",userSchema) ;
module.exports=User