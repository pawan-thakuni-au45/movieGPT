import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANG } from '../utils/constant';
import { showgpt } from '../utils/gptSlice';
import { changeLang } from '../utils/confifSlice';

const Header = () => {
    const dispatch=useDispatch()
    const user=useSelector((store)=>store.user)
    const nave=useNavigate()

     useEffect(()=>{
     const unSubscribe=onAuthStateChanged(auth,(user)=>{
        if(user){
            const{uid,email,displayName}=user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
            nave('/browser')
        }else{
            dispatch(removeUser())
            nave('/')
        }
    })
  //unsubscribe when component umoount
    return () =>unSubscribe()
        },[])
    const   handleSignout=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
         nave("/")
      }).catch((error) => {
        // An error happened.
      });
    }

    const handlegpt=()=>{
        dispatch(showgpt())

    }

    const handleLanguageChange=(e)=>{
        dispatch(changeLang(e.target.value))
    }

    return <div className='absolute w-screen bg-gradient-to-b from-black  px-8 py-2 z-10 flex justify-between'>
     <img className='w-44'  src={LOGO}   
             alt='logo'></img>

    {user && <div className='flex'>
        <select onChange={handleLanguageChange}>
        {
            SUPPORTED_LANG.map(opt=><option value={opt.identifire}>{opt.name}</option>)
        }
        </select>
       
               <button className=' bg-purple-800 px-6 py-2 mx-2 ' onClick={handlegpt}>GPT Search</button>

               <img className="w-12 h-12" alt='usericon' src="https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
    />
    
       <button onClick={handleSignout} className='font-bold text-white '>(sign out)</button>

     
       </div>}
    </div>
}

export default Header
