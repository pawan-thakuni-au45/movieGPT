import { createSlice } from "@reduxjs/toolkit";


const GptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false
    },
    reducers:{
        showgpt:(state,action)=>{
            state.showGptSearch=!state.showGptSearch
        }
    }
})
export const {showgpt}=GptSlice.actions
export default GptSlice.reducer