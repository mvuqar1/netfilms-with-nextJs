import MovieContainer from '@/containers/movies'
import React from 'react'

import Movies from "../../../mocks/movies.json"
import {notFound} from "next/navigation"
import { getMovie } from '@/services/moviesApi'

const API_URL="https://api.themoviedb.org/3"

async function delay(ms){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve()
    }, ms);
  })
}
export default async function MoviePage({params,searchParams}) {
  const movieDetail=await getMovie(params.id)
  // await delay(5000)
  if(!movieDetail){
    notFound()
  }
  if(searchParams.error==="true"){
    throw new Error("Error happened")
  }
  
  return (
    <div>
      <MovieContainer movie={movieDetail}/>
    </div>
  )
}
