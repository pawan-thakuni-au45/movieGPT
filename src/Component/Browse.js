import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'




const Browse = () => {
  const search=useSelector((store)=>store.gpt.showGptSearch)

    useNowPlayingMovies()
   

    
  return (
    <div>
    <Header/>

    {
      search ?
      

      <GptSearch/> 
      
      : <>
      <MainContainer/>
    <SecondryContainer/>
      </>
    }

    
    </div>
  )
}

export default Browse