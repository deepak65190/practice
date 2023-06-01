import { Input ,Text } from "@chakra-ui/react";
import "./Form.css"
import {useState} from "react"
import flower from "./petals 1.png"
const Form = () => {
    const [email ,setEmail]=useState<string>("")
    const [pass ,setPass]=useState<string>("")
    const hanldeForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(`your email id is ${email}`)
        setEmail("") ;
        setPass("")
    };
  return (
    <div className="formContainer">
      
      <img className="flower" width={"61px"} height={"49px"}  src={flower } alt="" />
      <Text marginTop={"70px"} marginBottom={"-50px"} fontSize={"34px"} lineHeight={"44px"}>
        Welcome <span style={{ color: "teal" }}>Back!</span>
      </Text>
      <Text fontSize={"14px"} lineHeight={"22.4px"} marginTop={"40px"} color={"#667085"}>
        Glad to see you, Again!
      </Text>
      <form action="" onSubmit={(e)=>hanldeForm(e)}>
        <Input
          width={"360px"}
          height={"49px"}
          type="email"
          marginTop={"100px"}
          isRequired
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <Input
          width={"360px"}
          height={"49px"}
          marginTop={"10px"}
          type="password"
          isRequired
          value={pass}
          onChange={(e)=>setPass(e.target.value)}
          placeholder="Enter your password"
        />
        <Input
          width={"360px"}
          height={"49px"}
          marginTop={"10px"}
          type="submit"
          value={"Log In "}
          backgroundColor={"black"}
          color={"white"}
          placeholder="Enter your password"
        />
      </form>
      <Text
        marginTop={"50px"}
        color={"#bfbfbf"}
        fontSize={"14px"}
        lineHeight={"17px"}
      >
        Don’t have an account yet?{" "}
        <span style={{ color: "teal" }}>Sign Up</span>{" "}
      </Text>
    </div>
  );
};

export default Form;
