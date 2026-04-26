import React from 'react'
import { useSelector } from 'react-redux'
import { lang } from '../utils/language'

const GptSearch = () => {
  const language=useSelector((store)=>store.lang.language)
  console.log(language,"rgerhert")

 
  return (
    <div className='pt-28  flex justify-center'>
    <form className='bg-black border h-20  w-4/12  grid grid-cols-12'>
     <input type='text' placeholder={lang[language].gptsearchPlaceholder} className='border px-4 py-2 col-span-8 bg-slate-500 text-white'></input>
     <button  className='bg-red-600 px-4 py-2 rounded-lg col-span-4'>{lang[language].search}</button>
     </form>
    </div>
  )
}

export default GptSearch