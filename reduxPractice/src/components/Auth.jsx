import { Navigate  } from "react-router-dom";
import {useSelector} from "react-redux" ;
import {useLocation} from "react-router-dom"
const Auth=({children})=>{
const isAuth = useSelector((store) => store.authReducer.isAuth);
const location= useLocation()
if(!isAuth){
    return <Navigate to="/login" replace state={{data:location.pathname}}/>
}
return children
}
export default Auth