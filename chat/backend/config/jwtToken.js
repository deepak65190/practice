 const jwt =require("jsonwebtoken")
const jwtToken=(id)=>{
    const token = jwt.sign({id}, process.env.JwtKey);

    return token 
}
module.exports =jwtToken