import { useState } from "react";

const BgChanger = () => {
    const [bgColor ,setBgColor]=useState("black")
   let a= document.getElementsByTagName("body")[0] ;
a.style.backgroundColor=bgColor
  return (
    <>
      <button style={{ color: "red", padding: "10px" }} onClick={()=>setBgColor("red")}>Red</button>{" "}
      <button style={{ color: "yellow", padding: "10px" }} onClick={()=>setBgColor("yellow")}>Yellow</button>{" "}
      <button style={{ color: "green", padding: "10px" }} onClick={()=>setBgColor("green")}>Green</button>
    </>
  );
};
export default BgChanger;
