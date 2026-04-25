import userReducer from './userSlice'
import moviesReducer from './movieSlice'
const { configureStore } = require("@reduxjs/toolkit");



export const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies:moviesReducer,
    },
})