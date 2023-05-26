import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./List.module.css";

function List() {
  const [list, setList] = useState([]);

  //get data fun
  const getData = () => {
    axios
      .get("http://localhost:3000/form")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.log("someting went wrong");
      });
  };

  console.log(list);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={styles.booksContainer}>
        {list.length > 0 &&
          list.map((ele) => {
            return (
              <div key={ele._id} className={styles.singleDiv}>
                <img
                  src={
                    ele.fileUrl
                      ? ele.fileUrl
                      : "https://images.pexels.com/photos/2669380/pexels-photo-2669380.jpeg?auto=compress&cs=tinysrgb&w=600"
                  }
                  alt="image"
                  height="50px"
                />
                <h3> {ele.name.toUpperCase()}</h3>
                <p>
                  Tech Stacks:{" "}
                  {ele.category.length > 0 && ele.category.map((el) =>{
                    return (
                      <div>
                        <span>{el}</span>
                      </div>
                    );
                  })}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default List;
