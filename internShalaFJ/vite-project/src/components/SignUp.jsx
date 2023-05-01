import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase";
import styles from "./Login.module.css";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const auth = getAuth(app);
  const navigate = useNavigate();
  sessionStorage.removeItem("key");
  const sinup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
       const value = res.user.accessToken;
        toast({
          title: "Account created",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        sessionStorage.setItem("key", value);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
        toast({
          title: err.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };
  return (
    <div className={styles.form}>
      <h1>Sign-up</h1>
      <input
        type="email"
        required
        className={styles.input}
        placeholder="Enter your email"
        value={email}
        autoFocus
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.input}
        type="password"
        required
        placeholder="Enter your passsowrd"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className={styles.submit} onClick={sinup}>
        Login
      </button>
    </div>
  );
}

export default SignUp;
