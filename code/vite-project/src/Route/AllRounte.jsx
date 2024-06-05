import { Route ,Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Not from "./Not";
const AllRoute=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/about:user_id" element={<About/>}/>
            <Route path="*" element={<Not/>}/>
        </Routes>
        </>
    )
}
export default AllRoute