import userReducer from './userSlice'
import moviesReducer from './movieSlice'
import showGptReducer from './gptSlice'
import langReducers from './confifSlice'
const { configureStore } = require("@reduxjs/toolkit");



export const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies:moviesReducer,
        gpt:showGptReducer,
        lang:langReducers,
    },
})