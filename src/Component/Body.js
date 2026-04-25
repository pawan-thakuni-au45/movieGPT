

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
            path:'/browser',
            element:<Browse/>
        },
    ])
 
    
        

     return <div>
      <RouterProvider router={appRouter}></RouterProvider>
     </div>    
}

export default Body