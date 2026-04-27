import { createSlice } from "@reduxjs/toolkit";


const GptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieName:null,
        movieResult:null,
    },
    reducers:{
        showgpt:(state)=>{
            state.showGptSearch=!state.showGptSearch
        },
        gptAddMovies:(state,action)=>{
            const {movieName,movieResult}=action.payload;
            state.movieName=movieName;
            state.movieResult=movieResult;

        }
    }
})
export const {showgpt,gptAddMovies}=GptSlice.actions
export default GptSlice.reducer