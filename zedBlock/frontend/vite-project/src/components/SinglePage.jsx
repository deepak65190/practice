import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./SinglePage.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useToast,
  Button,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useSearchParams, useParams, useNavigate ,Link} from "react-router-dom";
const SinglePage = () => {
  const use = useSearchParams();
  const { use_id } = useParams();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();
  const getData = () => {
    axios.get(`http://localhost:8080/allTodo/${use_id}`).then((res) => {
      setTodo(res.data);
    });
  };

  //handle open modal
  const hanleOpen = (data) => {
    onOpen();
    setTitle(data.title);
    setDesc(data.desc);
  };
  const handleEdit = (e, id) => {
    e.preventDefault();
    const data = {
      title,
      desc,
    };
    axios.patch(`http://localhost:8080/updateTodo/${id}`, data).then((res) => {
      console.log(res.data);
      toast({
        title: `${res.data}`,

        status: "success",
        duration: 5000,
        isClosable: true,
      });
    });
    onClose();
    getData();
  };
  const handleDel = (id) => {
    axios.delete(`http://localhost:8080/deleteTodo/${id}`).then((res) => {
      toast({
        title: "deleted successfull",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      getData();
      navigate("/tsc");
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      SinglePage
      <Link to={"/tsc"}>
        <Button variant="outline" colorScheme="teal">
          go to Task Screen
        </Button> 
      </Link>
      {todo.length > 0 &&
        todo.map((ele) => {
          return (
            <div className={styles.singelContainter} key={ele._id}>
              <h1>{ele.title}</h1>
              <p>{ele.desc}</p>
              <Button
                onClick={() => handleDel(ele._id)}
                colorScheme="red"
                variant="outline"
                marginRight={5}
              >
                delete
              </Button>
              <Button
                onClick={() => hanleOpen(ele)}
                variant="outline"
                colorScheme="teal"
              >
                edit
              </Button>
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Update your todo data</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <section>
                      <form onSubmit={(e) => handleEdit(e, ele._id)}>
                        <input
                          type="text"
                          required
                          autoFocus
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />

                        <textarea
                          required
                          value={desc}
                          rows={4}
                          onChange={(e) => setDesc(e.target.value)}
                        />

                        <input
                          style={{
                            width: "90%",
                            backgroundColor: "teal",
                            color: "white",
                            borderRadius: "10px",
                            cursor: "pointer",
                          }}
                          type="submit"
                        />
                      </form>
                    </section>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </div>
          );
        })}
    </div>
  );
};

export default SinglePage;
