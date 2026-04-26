const { createSlice } = require("@reduxjs/toolkit");


const moviesSlice=createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        trailerMovies:null
    },
    reducers:{
        addNowPlayingMovies :(state,action)=>{
               state.nowPlayingMovies=action.payload
        },
         addTrailerVideo:(state,action)=>{
            state.trailervideo=action.payload;

        },
         addPopularMovie:(state,action)=>{
            state.polplureMovies=action.payload;
        },
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovie}=moviesSlice.actions;

export default moviesSlice.reducer