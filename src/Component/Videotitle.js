import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pl-14 pt-[20%] absolute text-white bg-gradient-to-r'>
      <h1 className='text-bold text-3xl'>{title}</h1>
      <p className='w-4/12'>{overview}</p>
      <div>
       <button className='  border  bg-slate-300 py-2 px-10 rounded-lg flex '>
       <img src='https://cdn-icons-png.flaticon.com/128/27/27223.png' className='h-4 w-4 mx-4 '></img>
       Play
         </button>
      </div>
   
    </div>
  )
}

export default Videotitle