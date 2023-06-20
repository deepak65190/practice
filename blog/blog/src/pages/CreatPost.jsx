import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import ReactQuil from "react-quill";
import "react-quill/dist/quill.snow.css";
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
const CreatPost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [url, setUrl] = useState("");
  const [contant, setContant] = useState(""); 
  const navigate=useNavigate()

  const postSubmit=async(e)=>{
    e.preventDefault()
    const data={
        title,summary,url,contant
    }
   const res= await fetch("http://localhost:8080/post",{
method:"POST" ,
body: JSON.stringify(data),
headers: {'Content-Type':'application/json'},
credentials: 'include',
    }) ;
    const info=await res.json() ;
    if(info==="ok"){
        navigate("/")
    }
  }
  return (
    <div>
      CreatPost
      <form action="" onSubmit={(e)=>postSubmit(e)}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={summary}
          placeholder="summary"
          onChange={(e) => setSummary(e.target.value)}
        />
        <input
          type="url"
          value={url} 
          placeholder="image url"
          onChange={(e) => setUrl(e.target.value)}
        />
        <ReactQuil value={contant} modules={modules} formats={formats}  onChange={newValue=>setContant(newValue)}/>
        <button style={{ width: "200px" }}>post</button>
      </form>
    </div>
  );
};

export default CreatPost;
