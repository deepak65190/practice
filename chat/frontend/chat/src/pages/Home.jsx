import React from "react";
import { Box, Container, Text ,Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../component/Login";
import Signup from "../component/Signup";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate()
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (userInfo) {
      navigate("/chats"); 
    }
  }, [navigate]); 
  return (
    <Container maxW={"xl"} centerContent textColor={"black"}>
      <Box
        d="flex"
        justifyContent={"center"}
        width="100%"
        bg="white"
        borderRadius="lg"
        borderWidth="1px"
        margin="40px 0px 15px 0px"
        p={3}
      >
          
      <Text  fontSize={"4xl"} textAlign="center">Chaty app</Text>
      </Box>
      <Box width="100%" borderRadius="lg" shadow="rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;" borderWidth="1px" p={4}>
      <Tabs variant='soft-rounded' >
  <TabList mb="1rem">
    <Tab w="50%">Login</Tab>
    <Tab w="50%">Signup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
    <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  );
};

export default Home;
