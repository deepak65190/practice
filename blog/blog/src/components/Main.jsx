import React, { useEffect, useState } from "react";
import {formatISO9075} from "date-fns"
const Main = () => {
  const [data,setData]=useState([]) ;
  useEffect(()=>{
fetch("http://localhost:8080/post").then((res)=>{
  res.json().then((info)=>{
    setData(info)
  })
})
  },[])
  console.log(data)
  return (
    <main>
      {data.length>0 && data.map((ele)=>{
return(
<div key={ele._id} className="post">
        <div>
          <img
            className="image"
            src={ele.url}
            alt="iamge loading"
          />
        </div>
        <div className="texts">
          <h2>{ele.title}</h2>
          <p className="info">
            <a href="" className="author">
              {ele.author.name}
            </a>
            <time>{ele.createdAt? formatISO9075(new Date (ele.createdAt)):""}</time>
          </p>
          <p className="summuary">
            {ele.summary}
          </p>
        </div>
      </div>
)
      })}
      
    </main>
  );
};

export default Main;
