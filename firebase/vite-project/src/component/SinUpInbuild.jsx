import React, { useState } from "react";
import app from "../fireBase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SinUpInbuild() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const sinup = () => {
    createUserWithEmailAndPassword(auth, email, password).then((res) =>
    alert('success')
    ).catch((err)=>{
        alert(err.message);
        console.log(err.message)
    })

  };
  return (
    <div>
      <h1>SinUpInbuild</h1>
      <input
        type="email"
        required
        placeholder="enter your name"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        required
        placeholder="enter your passsowrd"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={sinup}>create acount</button>
    </div>
  );
}

export default SinUpInbuild;
