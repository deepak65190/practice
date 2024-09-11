import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatContext';
const MyChats = () => {
  const [loggerUser ,setLoggerUser]=useState()
  const { user, setSelectedChat, chats ,setChats } = ChatState();
  const fetchChats=async()=>{
    try {
    
      const config = {
        headers: { Authorization: `Bearer ${user.data.token}` }
      };
      const { data } = await axios.get(`http://localhost:8080/api/chat`, config);
      setChats(data)
    } catch (err) {
      toast({
        title: "Error 404",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      
    }
  }
  useEffect(()=>{
    setLoggerUser(JSON.parse(localStorage.getItem("userInfo")))
fetchChats()
  },[])
  return (
    <div>
      <h2>my chat</h2>
    </div>
  )
}

export default MyChats
