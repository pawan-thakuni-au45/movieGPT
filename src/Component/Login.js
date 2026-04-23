import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const[user,setUser]=useState(true)
   
  return (
    <div >
    <div className=' ml-2 w-3/12 mx-auto text-sm absolute z-30'>
    <Header/>
    </div>
    <div className='absolute'>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ba53094c-3e3b-4789-94a6-baac10310f07/web/IN-en-20260420-TRIFECTA-perspective_52edec47-1b88-414a-bbbe-670f7229d886_large.jpg'></img>
    </div>
    
   
    <form className='absolute mx-auto w-4/12 mx-auto mt-36 p-12 right-0 left-0 bg-black text-white bg-opacity-70 h-[200]' >
    <h1 className='mb-5'>{user ? "Sign In" : "Sign Up"}</h1>
    { !user &&  
      <input type='text' placeholder='Name' className=" bg-gray-600 mb-3 rounded-md py-2"></input>
    }
      <input type='text' placeholder='Email' className="bg-gray-600 mb-3 rounded-md py-2"></input>
      <input type='text' placeholder='Password' className='bg-gray-600 mb-3 rounded-md py-2'></input>
      <div>
     
      <button className='bg-red-700 w-10/12   border border-black rounded-lg my-5 py-2'>{user ? "Sign In ": "Sign Up"}</button>
    </div>
    <p onClick={()=>(
        setUser(!user)
    )
    } className='cursor-pointer'>{user ? "New Here? Click to Sign Up":"already a user ? Sign in here"}</p>
    
    </form>

    

    </div>
  )
}

export default Login