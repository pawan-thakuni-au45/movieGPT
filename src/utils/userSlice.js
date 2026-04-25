const { createSlice } = require("@reduxjs/toolkit");

const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(item,action)=>{
            return action.payload
        },
        removeUser:(item,action)=>{
            return null
        }
    }
})
export const {addUser,removeUser}=userSlice.actions

export default userSlice.reducer