import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./TaskScreen.module.css";
import { Input  ,Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const TaskScreen = () => {
  const [todo, setTodo] = useState([]);
  const [search ,setSearch]=useState("") ;
  const [isComplted ,setIsComplted ]=useState("")
  
  
  const handleChange =(e)=>{
    setIsComplted(e.target.value)

  }
  console.log(isComplted)
  useEffect(() => {
    let url = "http://localhost:8080/allTodo";
    // if (isComplted == false) {
    //    url = "localhost:8080/allTodo?isCompleted=false";
    // } else if (isComplted == true) {
    //   url = "localhost:8080/allTodo?isCompleted=true";
    // }
    axios.get(url).then((res) => {
      console.log(res.data ,"ddd")
      setTodo(res.data);
    });
  }, [isComplted]);
  return (
    <div className={styles.main}>
      <h1>Task Screen</h1>
      <h2></h2>
      <div className={styles.containter}>
        <div>
          <Link to="/addTask">
            <Button color={"teal"} variant="outline">
              add task
            </Button>
          </Link>
          <Input
            type={"orange"}
            width="auto"
            isRequired
            autoFocus
            placeholder="search by title"
            size="sm"
            onChange={(e) => setSearch(e.target.value)}
          />
          <h2>filters</h2>
          <select name="" id="" value={isComplted} onChange={(e)=>handleChange(e)}>
            <option value="true">filter by complted or not</option>
            <option value="">Completed</option>
            <option value="false">Not complted</option>
          </select>
        </div>
        <div>
          {todo.length > 0
            ? todo.map((el) => {
                return (
                  <div className={styles.singelContainter} key={el._id}>
                    <Link to={`/tsc/${el._id}`}>
                      <h1>{el.title}</h1>
                    </Link>
                    <p>{el.desc}</p>
                  </div>
                );
              })
            : "no data availabe"}
        </div>
      </div>
    </div>
  );
};

export default TaskScreen;
