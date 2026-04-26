import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
  const movies=useSelector(store=>store.movies)
  console.log(movies);
  return (
    <div className='bg-black text-white '>
    
    <MovieList  title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MovieList  title={"Popular Movies"} movies={movies.addPopularMovie}/>

   
    


    </div>
  )
}

export default SecondryContainer