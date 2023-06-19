import React, { useState } from "react";
import axios from "axios"
import Headers from "../components/Headers";
const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const regist =async (e) => {
    console.log(name,password)
    e.preventDefault();
    const response = await fetch('http://localhost:8080/register', {
      method: 'POST',
      body: JSON.stringify({name,password}),
      headers: {'Content-Type':'application/json'},
    });
    console.log(response)

  };
  return (
    <div>
      <Headers />
      <form action="" onSubmit={(e)=>regist(e)}>
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
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
