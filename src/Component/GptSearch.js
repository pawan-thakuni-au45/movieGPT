import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearch from './GptMovieSuggestions'
import { BACKGROUNG_IMAGE } from '../utils/constant'


const GptSearch = () => {
  return (
    <div >
    <div className='absolute -z-10'>
    <img src={BACKGROUNG_IMAGE} alt='logo'>gbjkbjkb</img>
    </div>
     <GptSearchBar/>
     <GptMovieSuggestions/>
     
    </div>
  )
}

export default GptSearch