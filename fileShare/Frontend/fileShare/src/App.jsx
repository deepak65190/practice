import { useEffect, useRef, useState } from "react";
import { Button, Text, AbsoluteCenter, Input } from "@chakra-ui/react";
import "./App.css";
import { upload } from "./components/api";
import { ArrowUpIcon, DownloadIcon } from "@chakra-ui/icons";
function App() {
  const [file, setFile] = useState("");
  const inputRef = useRef();
  const [download, setDownload] = useState("");
  const hanleUplaod = () => {
    inputRef.current.click();
  };
  const handleHome = () => {
    window.location.reload();
  };
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const formData = new FormData();
        formData.append("name", file.name);
        formData.append("file", file);
        let dataGet = await upload(formData);
        setDownload(dataGet.path);
      }
    };
    getImage();
  }, [file]);
  return (
    <>
      <div className="box">
        <Text
        className="mainText"
         fontSize={"30px"}
          textAlign={"center"}
          
          color="teal"
          padding={"20px"}
        >
          File sharing wep with link and download
        </Text>
        <AbsoluteCenter>
          {download ? (
            <>
              <Button className="homebtn" colorScheme="teal" variant="outline" onClick={handleHome}>
                Home
              </Button>
              <a className="atag" style={{ display: "block" }} href={download}>
                <Button
                className="linkBtn"
                  colorScheme="teal"
                  variant="outline"
                  marginTop={"10px"}
                  leftIcon={<DownloadIcon />}
                >
                  {download}
                </Button>
              </a>
            </>
          ) : (
            <Button
            className="uploadBtn"
              leftIcon={<ArrowUpIcon />}
              colorScheme="teal"
              variant="outline"
              onClick={() => hanleUplaod()}
            >
              upload
            </Button>
          )}
        </AbsoluteCenter>
        <Input
          type="file"
          ref={inputRef}
          display={"none"}
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
    </>
  );
}

export default App;
