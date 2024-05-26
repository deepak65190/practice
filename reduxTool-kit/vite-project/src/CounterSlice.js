import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:"counter",
    initialState:{value:0} ,
    reducers:{
        add:(state ,actions)=>{
           
            state.value+=actions.payload ;
        } ,
        sub:(state,actions)=>{
            state.value-=actions.payload ;
        } 
    }
})
export const {add,sub}=counterSlice.actions ;

export default counterSlice.reducer