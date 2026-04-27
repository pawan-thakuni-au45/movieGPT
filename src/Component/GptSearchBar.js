import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lang } from '../utils/language'
import genai from "../utils/gemini";
import { changeLang } from '../utils/confifSlice'
import { API_OPTIONS } from '../utils/constant';
import { gptAddMovies } from '../utils/gptSlice';

const GptSearchBar = () => {
  const language=useSelector((store)=>store.lang.language)
  const dispatch=useDispatch()
   const searchText = useRef(null);

  

  console.log(searchText,"rgerhert")

  //search movie in TMDB

  const searchMovieTmdb=async(movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=true&language=en-US&page=1",API_OPTIONS)

        const json=await data.json()
        return json.results
  }

  const handleGptSearchClick = async () => {
    // make an API call to GPT API and get Movie result

    const query =
      "Act as a Movie Recommendation system and suggest some movies for the qurey: " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const result = await genai.models.generateContent({
 
  const response = await genai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: query,
  });
  const gptMovie=response.text.split(",");
  
  const promiseArray=gptMovie.map((movie)=>searchMovieTmdb(movie)) //becaue our serachrmdb is async so it will only return us 5 promises,
  //so to get data from 5 promises their is somthing call promis.all

  const tmdbResult=await Promise.all(promiseArray)
  console.log(tmdbResult,"final")
  dispatch(gptAddMovies({movieName:gptMovie,movieResult:tmdbResult}))
}


  

 
 
  return (
    <div className='pt-28  flex justify-center'>
    <form onSubmit={(e) => e.preventDefault()} className='bg-black border h-20  w-4/12  grid grid-cols-12'>
    <input     ref={searchText} type='text' placeholder={lang[language].gptsearchPlaceholder} className='border px-4 py-2 col-span-8 bg-slate-500 text-white'></input>
     <button  className='bg-red-600 px-4 py-2 rounded-lg col-span-4'  onClick={handleGptSearchClick}>{lang[language].search}</button>
   
     
     </form>
    </div>
  )
}

export default GptSearchBar