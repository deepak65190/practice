import { configureStore } from "@reduxjs/toolkit";
// import CounterSlice from "./CounterSlice";
import Api from "./ApiSlice";
export const store=configureStore({
    reducer:Api
})