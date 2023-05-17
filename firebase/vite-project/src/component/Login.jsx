import React, { useState } from "react";
import app from "../fireBase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const sinup = () => {
   signInWithEmailAndPassword(auth, email, password)
     .then((res) => alert("success login"))
     .catch((err) => {
       alert(err.message);
       console.log(err);
     });
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        required
        placeholder="enter your email"
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
      <button onClick={sinup}>Login</button>
    </div>
  );
}

export default Login;
