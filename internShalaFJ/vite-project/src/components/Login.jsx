import React ,{useState} from 'react' 
import app from '../Firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from "./Login.module.css"
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function Login() {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const toast = useToast();
      const navigate = useNavigate();
     const auth = getAuth(app);
     const sinup = () => {
       signInWithEmailAndPassword(auth, email, password)
         .then((res) => {
        
           toast({
             title: "Login success",
             status: "success",
             duration: 9000,
             isClosable: true,
           });
           
            navigate("/home");
         })
         .catch((err) => {
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
      <h1>Login</h1>
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

export default Login