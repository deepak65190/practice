const Chat = require("../model/chat.model");
const asyncHandler = require('express-async-handler');
const User = require("../model/user.model");

const createChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.sendStatus(400);
  }

  // Find the chat between the two users
  let isChat = await Chat.findOne({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } }
    ]
  }).populate("users", "-password")
    .populate("latestMessage")
    isChat=await  User.populate(isChat,{
        path: "latestMessage.sender",
             select: "name pic email"
    })

  if (isChat) {
    res.send(isChat);
  } else {
    // If chat does not exist, create a new one
    const chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId]
    };

    try {
      const createdChat = await Chat.create(chatData);
      const fullChat = await Chat.findOne({ _id: createdChat._id })
        .populate("users", "-password");

      res.status(200).json(fullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

const fetchChats = asyncHandler(async (req, res) => {
    try {
      Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
        .populate("users", "-password")
        .populate("groupAdmin", "-password")
        .populate("latestMessage")
        .sort({ updatedAt: -1 })
        .then(async (results) => {
          results = await User.populate(results, {
            path: "latestMessage.sender",
            select: "name pic email",
          });
          res.status(200).send(results);
        });
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  });

module.exports = {createChat ,fetchChats};

// .populate({
//    
//   });