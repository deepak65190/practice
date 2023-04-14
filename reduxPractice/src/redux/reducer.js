import * as types from "./actionType";
const initial = {
  books: [],
  isLoading: false,
  isError: false,
};
const reducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_BOOK_ERROR:{
        return {...state ,isLoading:true}
    }
    case types.GET_BOOK_SUCCESS:{
        return {...state ,isLoading:false ,books:payload}
    }
    case types.GET_BOOK_ERROR :{
        return {...state ,isLoading:false ,isError:true}
    }
    default:
      return state;
  }
};
export  {reducer}