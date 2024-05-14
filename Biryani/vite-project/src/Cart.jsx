import React, { useState ,useContext } from "react";
import {cartContext} from "./Context.jsx"
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";

const ProductCard = (props) => {
     console.log(props.value.quantity)

const handleIncrement=()=>{
    props.add(props.value.id,props.value.quantity)
}
const handleDecrement=()=>{
    props.sub(props.value.id,props.value.quantity)
}
  return (
    <Box maxW="sm"  style={{"marginTop":"10px"}} borderWidth="1px" m={"auto"} bg={"grey"} borderRadius="lg" overflow="hidden">
        
    <Image src={props.value.iamge}  alt={name}  />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Heading as="h2" size="md" mr="2" textAlign={"center"} color={"white"}>
            {props.value.name}
          </Heading>
          <Text color="white" fontSize="sm"  pt={"10px"} textAlign={"center"} >
            ${props.value.price}
          </Text>
        </Box>

        <Flex mt="2" justifyContent="center" alignItems="center">
          <Button size="sm" onClick={handleDecrement}>
            -
          </Button>
          <Text pl={5} pr={5} color={"white"}>{props.value.quantity}</Text>
          <Button size="sm" onClick={handleIncrement}>
            +
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
