import React, { useState } from "react";
import "./form.module.css";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
function TodoForm() {
  const toast = useToast();
  const [name, setName] = useState("");
  const [category, setCategory] = useState([]);
  const [fileUrl, setFileUrl] = useState("");
  const handleTech = (e) => {
    let newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(category.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };
  const handelfile = async (e) => {
    const file = e.target.files[0];
    const fData = new FormData();
    fData.append("file", file);
    fData.append("upload_preset", "aozv7ten");
    fData.append("cloud_name", "dbhwo1o86");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dbhwo1o86/image/upload",
      {
        method: "POST",
        body: fData,
      }
    );

    const data = await res.json();
    console.log(data);
    setFileUrl(data.secure_url);
    console.log(data.secure_url);
  };

  
  const handleForm = (e) => {
    e.preventDefault();
    console.log("hii");
    if (fileUrl) {
      const formData = {
        name,
        fileUrl,
        category,
      };
      console.log(formData);
      axios
        .post("http://localhost:3000/formPost", formData)
        .then((res) => {
          console.log(res);
          toast({
            title: "form submitted",

            status: "success",
            duration: 5000,
            isClosable: true,
          });
        })
        .catch((err) => {
          console.log(err);
        });

      setName("");
      setCategory("");
      setFileUrl("");
    } else {
      toast({
        title: "uploading  Image or someting went wrong checkform",

        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <form action="" onSubmit={(e) => handleForm(e)}>
      <h1>Form</h1>
      <input
        type="text"
        placeholder="full name"
        value={name}
        autoFocus
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input required type="file" onChange={(e) => handelfile(e)} />
      <input
        checked={category.includes("ReactJS")}
        type="checkbox"
        value="ReactJS"
        onChange={handleTech}
      />
      <label>ReactJS</label>
      <input
        checked={category.includes("MongoDB")}
        type="checkbox"
        value="MongoDB"
        onChange={handleTech}
      />
      <label>MongoDB</label>
      <input
        checked={category.includes("NodeJS")}
        type="checkbox"
        value="NodeJS"
        onChange={handleTech}
      />
      <label>NodeJS</label>
      <input
        style={{
          width: "90%",
          backgroundColor: "teal",
          color: "white",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        type="submit"
      />
    </form>
  );
}

export default TodoForm;
