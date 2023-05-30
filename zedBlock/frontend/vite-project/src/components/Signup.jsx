import React, { useState } from "react";
import axios from "axios";
import "./Signup.module.css"
import { useToast } from "@chakra-ui/react";
import {useNavigate} from "react-router-dom"
const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate=useNavigate()
  const toast = useToast();
  const handleForm = (e) => {
    e.preventDefault();
    const formData = {
      name:name.toLowerCase(),
      email,
      password,
    };
    try {
      axios.post("http://localhost:8080/signup", formData).then((res) => {
        console.log(res.data);
        if (res.data == 0) {
          toast({
            title: "this name already exists use unique name",
            status: "warning",
            duration: 5000,
            isClosable: true,
          });
          setName("");
        } else {
          toast({
            title: "signup successfull",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          navigate("/login");
          setName("");
          setEmail("");
          setPassword("");
        }
      });
    } catch (err) {
      toast({
        title: err.message,
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleForm}>
        <h4>Signup</h4>
        <input
          type="text"
          placeholder="enter name"
          required
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="enter email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          style={{
            width: "90%",
            backgroundColor: "teal",
            color: "white",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          type="submit"
        />
      </form>
    </div>
  );
};

export default Signup;
