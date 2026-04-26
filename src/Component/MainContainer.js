import React, { useReducer } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Videotitle from './Videotitle'
import Videobackground from './Videobackground'

const MainContainer = () => {

  const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
  console.log("movies",movies)
if(!movies) return;
console.log("movies",movies)
  const movie=movies[0]

  

  const{original_title,overview}=movie
    

  return (
    <div className=' '>
    <Videotitle title={original_title} overview={overview}/>
    <Videobackground/>
    
    </div>
  )
}

export default MainContainer