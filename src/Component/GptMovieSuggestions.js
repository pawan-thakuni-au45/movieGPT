import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {

  const {movieName,movieResult}= useSelector((store)=>store.gpt)
  
  console.log("movienamenresult",movieName,movieResult)
  if(!movieName) return null;
  return (
    <div className="p-4 m-4  text-white bg-opacity-50 text-bold">
   
    {movieName.map((movie,index)=><MovieList title={movie} movies={movieResult[index]}/>)}
  
     </div>
  )
}

export default GptMovieSuggestions