import React, { useState } from "react";
import Headers from "../components/Headers";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {userContext} from "../components/Context"
import {useContext} from "react"
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate() ;
  const {userInfo, setUserInfo}=useContext(userContext)
  const regist = async (e) => {
    
    e.preventDefault();
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify({name, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    }); 
    console.log(response)  
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo)
        navigate("/")
      });
    } else {
      alert('wrong credentials');
    }

  };
  return (
    <div>
      <Headers />
      <form action="" onSubmit={(e) => regist(e)}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button>login</button>
      </form>
    </div>
  );
};

export default Login;
