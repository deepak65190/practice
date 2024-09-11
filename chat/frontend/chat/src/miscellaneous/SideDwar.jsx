import React, { useEffect, useState } from 'react';
import {
  Avatar, Box, Button, Menu, MenuButton, MenuDivider, MenuItem, Text, MenuList, Input, useDisclosure,
  Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useToast,
  Spinner
} from '@chakra-ui/react';
import { Search2Icon, BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import UserList from './UserList';
import Profile from './Profile';
import { ChatState } from '../Context/ChatContext';
import { useNavigate } from 'react-router-dom';
import Chatloading from './Chatloading';
import axios from 'axios';
import { useBreakpointValue } from '@chakra-ui/react';


const SideDwar = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { user,setSelectedChat, chats ,setChats } = ChatState();
  const navigate = useNavigate();

  const handleLogOut = () => {
    console.log("hii");
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const handleSerach = async () => {
    if (!search) {
      toast({
        title: "Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }
    try {
      setLoading(true);
      const config = {
        headers: { Authorization: `Bearer ${user.data.token}` }
      };
      const { data } = await axios.get(`http://localhost:8080/api/user?search=${search}`, config);
      setLoading(false);
      setSearchResult(data);
      console.log(data);
    } catch (err) {
      toast({
        title: "Error 404",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      setLoading(false);
    }
  };



  const accessChat = async(user_id) => {
    try{
setLoadingChat(true) ;
const config={
  headers:{
    "Content-type":"application/json",
    Authorization:`Bearer ${user.token}`
  } 
  
}
const {data}= await axios.post("http://localhost:8080/api/chat",{user_id},config)  ;
console.log("data chat" ,data)
if(!chats.find((c)=>c._id==data._id))setSelectedChat([data,...chats])
setSelectedChat(data)
setLoadingChat(false) ;
onclose()
    }catch(err){
      toast({
        title: "error",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
    }
  };

  // Determine if the close button should be shown based on screen size
  const showCloseButton = useBreakpointValue({ base: true, sm: true, md: true, lg: false });

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" bg="white" width="100%" padding="5px 10px 10px 10px" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
        <Box>
          <Button variant="ghost" onClick={onOpen}>
            <Search2Icon />
            <Text paddingLeft="10px" display={{ base: "none", md: "flex" }}>Search User</Text>
          </Button>
        </Box>
        <Text fontSize={{ base: "sm", md: "md", lg: "2xl" } }>Talky Chat</Text>
        <div>
          <Menu>
            <MenuButton p="1">
              <BellIcon fontSize={{ base: "md", md: "lg" }} m="1" />
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton
              fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
              size={{ base: 'sm', md: 'md', lg: 'lg' }}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              <Avatar size={{ base: "xs", md: "sm" }} cursor="pointer" name={user.data.name} src={user.data.pic} />
            </MenuButton>
            <MenuList>
              <Profile user={user.data}>
                <MenuItem>My Profile</MenuItem>
              </Profile>
              <MenuDivider />
              <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderBottomWidth="1px">
          {showCloseButton && <DrawerCloseButton />}
          <DrawerHeader borderBottomWidth='1px'>Search users</DrawerHeader>
          <DrawerBody>
            <Box display="flex" pb="2">
              <Input placeholder="search by name or email" mr="2" value={search} onChange={(e) => setSearch(e.target.value)} />
              <Button onClick={handleSerach}>Search</Button>
            </Box>
            {loading ? <Chatloading /> : (
              searchResult?.map((users) => (
                <UserList key={users._id} user={users} handleFun={() => accessChat(users._id)} />
              ))
            )}
            {loadingChat&& <Spinner ml="auto" display="flex"/>}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDwar;
