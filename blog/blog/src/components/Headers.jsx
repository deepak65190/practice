import React ,{useEffect ,useContext} from "react";
import Main from "./Main";
import { Link } from "react-router-dom";
import '../App.css'
import {userContext} from "./Context"
const Headers = () => {
  const {userInfo, setUserInfo}=useContext(userContext)
 
useEffect(()=>{
fetch("http://localhost:8080/profile",{credentials:"include"}).then((res)=>{
  res.json().then((data)=>setUserInfo(data.name))
})

},[])
const logout =()=>{
  fetch('http://localhost:8080/logout', {
    credentials: 'include',
    method: 'POST',
  });
  setUserInfo(null);

}
  return (
    <div>
    <header>
      <Link to={"/"} className="logo">
        My blog
      </Link>
      <nav>
      {userInfo && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout </a>
          </>
        )}
        {!userInfo &&(
          <>
           <Link to={"/login"}>Login</Link>
        <Link to="/register">Register</Link></>
        )}
       
      </nav>
    </header>
    </div>
  );
};

export default Headers;
