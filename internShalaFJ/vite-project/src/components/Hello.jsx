import React from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import styles from "./Login.module.css";
function Hello() {
  const key = sessionStorage.getItem("key");
  
  return (
    <div className={styles.btn}>
      {key ? (
        <Button>
          <a href="https://www.icecreamlabs.com/" target="_blank">
            Hello World
          </a>
        </Button>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
}

export default Hello;
