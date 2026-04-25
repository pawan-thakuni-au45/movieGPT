import userReducer from './userSlice'
const { configureStore } = require("@reduxjs/toolkit");


export const appStore = configureStore({
    reducer: {
        user: userReducer,
    }
})