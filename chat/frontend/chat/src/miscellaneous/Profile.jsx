import React from 'react' ;

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure ,
    ModalCloseButton,
    IconButton,
    Button ,
    Image ,
    Text
  } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
const Profile = ({children,user}) => {
    console.log(user.name)
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      {children?<span onClick={onOpen}>{children}</span>:<IconButton display={{base:"flex"}} icon={<ViewIcon/>}></IconButton>}
      <Modal size={{md:"lg"}} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" justifyContent="center" fontSize="2xl">{user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" alignItems="center">
            <Image borderRadius="full" boxSize="150px" src={user.pic} alt={user.name}/>
            <Text fontSize="2xl">
              Email:{user.email}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Profile
