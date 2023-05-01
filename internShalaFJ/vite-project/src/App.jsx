import React from "react";

import styles from "./App.css";
import SignUp from "./components/SignUp";
import AllRoutes from "./components/AllRoutes";
function App() {
  return (
    <div className={styles.mainApp}>
      <AllRoutes />
    </div>
  );
}

export default App;
