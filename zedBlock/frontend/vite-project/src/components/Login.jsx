import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import "./Signup.module.css";
import axios from "axios";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const handleForm = (e) => {
    e.preventDefault();
    const formData = {
      name,
      password,
    };
    axios.post("http://localhost:8080/login", formData).then((res) => {
      if (res.data == 0) {
        toast({
          title: "wrong password",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      } else if (res.data == 1) {
        toast({
          title: "signup successfull",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setName("");
        setPassword("")
        navigate("/tsc")
      } else {
        toast({
          title: "something went wrong",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      }
    });
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

export default Login;
