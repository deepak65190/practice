import React from 'react'
import {ChatState} from "../Context/ChatContext"
import SideDwar from '../miscellaneous/SideDwar';
import MyChats from '../miscellaneous/MyChats';
import { Box } from '@chakra-ui/react';
import ChatBox from '../miscellaneous/ChatBox';
const Chat = () => {
    const{user}=ChatState() ;
  return (
    <div style={{width:"100%" , padding:"10px"}}>
    {user&&<SideDwar/>}
    <Box display="flex" justifyContent="space-between" p="10px" h="90vh">
        {user&&<MyChats/>}
        {user&&<ChatBox/>}
    </Box>
    </div>
  )
}

export default Chat

