import React, { useReducer } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Videotitle from './Videotitle'
import Videobackground from './Videobackground'

const MainContainer = () => {

    const movie=useSelector((store)=>store.movie?.nowPlayingMovies)

    if(!movie) return 

    const mainMovie=movie[0]
    console.log(mainMovie,"main")

    const {original_title,overview}=mainMovie

  return (
    <div className='py-40'>
        <Videotitle title={original_title} overview={overview} />
        <Videobackground/>
        rgrjkgbrjkgnrjgkregrg
    </div>
  )
}

export default MainContainer