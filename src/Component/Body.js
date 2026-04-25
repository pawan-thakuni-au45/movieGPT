

import React, { useEffect } from 'react'
import Login from './Login'
import Header from './Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import { Provider, useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser } from '../utils/userSlice'
import { auth } from '../utils/firebase'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {
    const dispatch=useDispatch()
    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        },
    ])
 
    useEffect(()=>{
 onAuthStateChanged(auth,(user)=>{
    if(user){
        const{uid,email,displayName}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
    }
})
    },[])
        

     return <div>
      <RouterProvider router={appRouter}></RouterProvider>
     </div>    
}

export default Body