import * as types from "./actionType";
import axios from "axios";
export const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios.get("https://reqres.in/api/login" ,payload).then((r)=>{
    dispatch({type:types.LOGIN_SUCCESS ,payload:r.data.token})
  }).catch(err=>{
    dispatch({type:types.LOGIN_ERROR})
  })
};
