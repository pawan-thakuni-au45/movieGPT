import { useDebugValue, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constant"
import {  addPopolureMovie, addPopularMovie} from "../utils/movieSlice"


const usePopolureMovies=()=>{

    const dispatch=useDispatch()
   

     const getPoplureMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/popular?page=1",API_OPTIONS);
        const json=await data.json()
        dispatch(addPopularMovie(json.results))

     }


     useEffect(()=>{
         getPoplureMovies()
     },[])
}


export default usePopolureMovies