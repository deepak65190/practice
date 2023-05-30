const express = require("express");
const todoModel = require("../models/todo.model");
const todoRouter = express.Router();

//get request todo all

todoRouter.get("/allTodo", async (req, res) => {
 
  try {
    const todo = await todoModel.find(req.query);
    res.status(200).send(todo);
  } catch (err) {
    res.send(err.message);
  }
});
//get request todo BY ID
todoRouter.get("/allTodo/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const todo = await todoModel.find({ _id: ID });
    res.status(200).send(todo);
  } catch (err) {
    res.send(err.message);
  }
});

//post request todo
todoRouter.post("/postTodo", async (req, res) => {
  const payload = req.body;
  try {
    const data = new todoModel(payload);
    await data.save();
    res.status(200).send("todo added successfully");
  } catch (err) {
    res.send(err.message);
  }
});

//patch request todo
todoRouter.patch("/updateTodo/:id", async (req, res) => {
  const payload = req.body;
  const ID = req.params.id;
  console.log(ID) 
  console.log(payload)
  try {
    await todoModel.findByIdAndUpdate({ _id: ID, payload });

    res.status(200).send("todo updated successfully");
  } catch (err) {
    res.send(err.message);
  }
});

//delete request todo
todoRouter.delete("/deleteTodo/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await todoModel.findByIdAndDelete({ _id: ID });

    res.status(200).send("todo deleted successfully");
  } catch (err) {
    res.send(err.message);
  }
});
module.exports = todoRouter;
