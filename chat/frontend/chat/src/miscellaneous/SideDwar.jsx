import React ,{useEffect, useState} from 'react'
import { Avatar, Box ,Button ,Menu,MenuButton,MenuDivider,MenuItem,Text ,MenuList} from '@chakra-ui/react';
import UserList from './UserList';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure ,
  Input ,
  useToast
 
} from '@chakra-ui/react'

import {Search2Icon ,BellIcon, ChevronDownIcon} from "@chakra-ui/icons" ;
import { ChatState } from '../Context/ChatContext';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';
import Chatloading from './Chatloading';
import axios from 'axios';
const SideDwar = () => {
  const [search ,setSearch]=useState("") ;
const [searchResult ,setSearchResult]=useState([]) ;
const [loading ,setLoading]=useState(false) ;
const [loadingChat ,setLoadingChat]=useState(false) ;
const { isOpen, onOpen, onClose } = useDisclosure() ;
const toast = useToast();
const{user}=ChatState() ;
const navigate=useNavigate()
const handleLogOut=()=>{
  console.log("hii")
  localStorage.removeItem("userInfo") ;
  navigate("/")
}
const handleSerach=async()=>{
if(!search){
  toast({
    title: "enter something in search",
    status: "warning",
    duration: 5000,
    isClosable: true,
    position: "top-left",
  });
  return ;
}
try{
setLoading(true)
const config={
  headers:{Authorization:`Bearer ${user.data.token}`}
}

const {data}=await axios.get(`http://localhost:8080/api/user?search=${search}`,config) ;
setLoading(false) ;
 setSearchResult(data)
console.log(data)
}catch(err){
  toast({
    title: "error 404",
    status: "warning",
    duration: 5000,
    isClosable: true,
    position: "bottom-left",
  });
  setLoading(false)
}
}
const accessChat=(id)=>{

}
  return (
    <>
     <Box display="flex" justifyContent="space-between" alignItems="center" bg="white" width="100%" padding="5px 10px 10px 10px" boxShadow= "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Box>
      <Button variant="ghost" onClick={onOpen}>
      <Search2Icon/>
      <Text paddingLeft="10px" display={{base:"none" ,md:"flex"}}>Search User</Text>
      </Button></Box>
      <Text fontSize="2xl">Talk to Buddy</Text>
      <div>
        <Menu>
          <MenuButton  p="1">
          <BellIcon fontSize="2xl" m="1"/>
          </MenuButton>
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}  >
         <Avatar size="sm" cursor="pointer" name={user.data.name} src={user.data.pic}  />

          </MenuButton>
          <MenuList>
            <Profile user={user.data}>
            <MenuItem >My Profile</MenuItem>
            </Profile>
            <MenuDivider/>
            <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
          </MenuList>
        </Menu>
      </div>
     </Box>
     <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderBottomWidth="1px">
          <DrawerHeader borderBottomWidth='1px'>Search users</DrawerHeader>9
          <DrawerBody>
           <Box display="flex" pb="2">
            <Input placeholder="search by name or email" mr="2" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <Button onClick={handleSerach}>Search</Button>
           </Box>
           {loading?<Chatloading/>:(
            searchResult?.map((users)=>(<UserList key={users._id} user={users} handdleFun={()=>accessChat(users._id)} />))
           )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideDwar
