import { createSlice  ,createAsyncThunk} from "@reduxjs/toolkit";
 const url="https://jsonplaceholder.typicode.com/todos" ;
 export const fetchTodos=createAsyncThunk("xyz",()=>{
   return   fetch(url).then((res)=>res.json())
})
const Api=createSlice({
    name:"api",
    initialState:{
        isloading:false ,
        data:[],
isError:false 
    } ,
    extraReducers: (builder)=>{
        // console.log(builder ,"bad")
builder.addCase(fetchTodos.pending ,(state ,action)=>{
    state.isloading=true 
})
builder.addCase(fetchTodos.fulfilled ,(state ,action)=>{
    
    state.isloading=false ,
     console.log(action)
    
})
builder.addCase(fetchTodos.rejected ,(state ,action)=>{
    
    state.isError=true 
})
    }
})
export default Api.reducer