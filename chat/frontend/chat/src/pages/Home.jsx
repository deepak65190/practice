import React from "react";
import { Box, Container, Text ,Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "./Login";
const Home = () => {
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
      <Box width="100%" borderRadius="lg" borderWidth="1px" p={4}>
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
    {/* <Signup/> */}
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  );
};

export default Home;
