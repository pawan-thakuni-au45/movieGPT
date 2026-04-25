import React, { useRef, useState } from 'react'
import Header from './Header'
import validate from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navi=useNavigate()
    const[user,setUser]=useState(true)
    const [errorMessage,setErrorMessage]=useState(null)
    const email=useRef(null)
   
    const password=useRef(null)
    const name=useRef(null)

    console.log("Errormessage",errorMessage)

    const handleClick=()=>{
        const message=validate(email.current.value, password.current.value)
          setErrorMessage(message)
          console.log(message,"message is hagrg")
          if(message) return ;

          if(!user){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
        displayName: name.current.value, photoURL: "https://assets.cntraveller.in/photos/625eadcff9b9b60bcf96009e/master/pass/Munsyari.png"
      }).catch((error) => {
        // An error occurred
        navi("/error")
        // ...
      });
   navi('/browser')
             
    })
          
} else{

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    navi('/browser')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
    // ..
  });
          }
    }

   
  return (
    <div >
    <div className=' ml-2 w-3/12 mx-auto text-sm absolute z-30'>
    <Header/>
    </div>
    <div className='absolute'>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ba53094c-3e3b-4789-94a6-baac10310f07/web/IN-en-20260420-TRIFECTA-perspective_52edec47-1b88-414a-bbbe-670f7229d886_large.jpg' alt='fefe'></img>
    </div>
    
   
    <form onSubmit={(e)=>e.preventDefault()} className='absolute mx-auto w-4/12 mx-auto mt-36 p-12 right-0 left-0 bg-black text-white bg-opacity-70 h-[200]' >
    <h1 className='mb-5'>{user ? "Sign In" : "Sign Up"}</h1>
    { !user &&  
      <input ref={name} type='text' placeholder='Name' className=" bg-gray-600 mb-3 rounded-md py-2"></input>
    }
      <input ref={email} type='text' placeholder='Email' className="bg-gray-600 mb-3 rounded-md py-2"></input>
      <input ref={password} type='text' placeholder='Password' className='bg-gray-600 mb-3 rounded-md py-2'></input>
      <p className='text-bold text-red-600'>{errorMessage}</p>
      <div>
     
      <button className='bg-red-700 w-10/12   border border-black rounded-lg my-5 py-2' onClick={handleClick
      }>{user ? "Sign In ": "Sign Up"}</button>
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