import axios from "axios";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const AddTask = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const toast=useToast()
  const navigate=useNavigate()
  const handleForm = (e) => {
    e.preventDefault();
    const todoData = {
      title,
      desc,
      isComplted:false
    };
    axios.post("http://localhost:8080/postTodo",todoData).then((res)=>{
        
        toast({
          title: "signup successfull",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/tsc")
    })
  };
  return (
    <div>
      <form action="" onSubmit={handleForm}>
        Add task
        <input
        required
          type="text"
          placeholder="add task"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
        required
          value={desc}
          rows={4}
          placeholder={"add your task description"}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          style={{
            width: "90%",
            backgroundColor: "teal",
            color: "white",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          type="submit"
          value={"Add"}
        />
      </form>
    </div>
  );
};

export default AddTask;
