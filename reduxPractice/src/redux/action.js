import * as types from "./actionType" ;
import axios from "axios"
const getBookRequest=()=>{
    return {
        type:types.GET_BOOK_REQUEST
    }
}
const getBookSuccess=(payload)=>{
    return {
        type:types.GET_BOOK_SUCCESS ,
        payload
    }
}
const getBookError=()=>{
    return {
        type:types.GET_BOOK_ERROR
    }
}
const getBooks = (params) => (dispatch) => {
    dispatch(getBookRequest()) ;
    return axios
      .get("http://localhost:3000/books" ,params)
      .then((re) => {
        
        dispatch(getBookSuccess(re.data));
      })
      .catch((err) => {
        dispatch(getBookError());
      });
};
export {getBooks}