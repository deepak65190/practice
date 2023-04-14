import * as types from "./actionType" ;
const initial={
    token:"" ,
    isAuthLoading:false ,
    isAuthError:false ,
    isAuth:false
} ;
const reducer=(state=initial ,action)=>{
    const {type ,payload}=action ;
    switch(type){
case types.LOGIN_REQUEST:{
    return {...state ,isAuthLoading:true} ;
} 
case types.LOGIN_SUCCESS:{
    return {...state ,isAuthLoading:false ,token:payload ,isAuth:true}
}
case types.LOGIN_ERROR :{
    return {...state ,isAuthError:true ,isAuthLoading:false}
}
        default :return state
    }
}
export {reducer}