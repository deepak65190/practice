import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Button from "./Buttin";
const App = () =>{
  const pie=3.14 ;
  return (
  <div>
    {console.log(pie)}
    <h1>hello world</h1>
    {Button()}
  </div>
)};

export default App;
