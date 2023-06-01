import { Text } from "@chakra-ui/react";
import "./image.css";
import image from "./Frame 45 2.png";
import world from "./Vector.png" ;
import linkdin from "./linnkdin.png" ;
import insta from "./instagram 1.png" ;
import facebook from "./facebook 1.png"
const Image = () => {
  return (
    <div className="imageContainter">
      <Text
        lineHeight={"57px"}
        letterSpacing={"3%"}
        fontSize="38px"
        marginLeft={"40px"}
        marginTop={"307px"}
      >
        100% uptime 😎
      </Text>
      <Text
        letterSpacing={"3%"}
        lineHeight={"42px"}
        color={"#bfbfbf"}
        fontSize="28px"
        marginLeft={"40px"}
      >
        Zero Infrastructure{" "}
      </Text>
      <Text
        letterSpacing={"3%"}
        lineHeight={"42px"}
        fontSize="28px"
        color={"#bfbfbf"}
        marginLeft={"40px"}
      >
        Management
      </Text>
      <div className="logo">
        <img src={image} alt="" />
      </div>
      <div style={{ display: "flex" }}>
        <div className="emptyDiv"></div>
        <div className="emptyDivC"></div>
        <div className="emptyDivl"></div>
      </div>
      <div>
        <img className="world" src={world} alt="" />
        <span className="world1">aesthisia.com</span>
      </div>
      <div className="socialLinks">
        <img height={"15px"} src={linkdin} alt="" />
        <img height={"15px"} src={facebook} alt="" />
        <img height={"15px"} src={insta} alt="" />
      </div>
    </div>
  );
};

export default Image;
