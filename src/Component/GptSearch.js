import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'

import { BACKGROUNG_IMAGE } from '../utils/constant'
import GptSearchBar from './GptSearchBar'


const GptSearch = () => {
  return (
    <div >
    <div className='fixed inset-0 -z-10'>
    <img src={BACKGROUNG_IMAGE} alt='logo'></img>
    </div>

<GptSearchBar/>
     <GptMovieSuggestions/>
     
    </div>
  )
}

export default GptSearch