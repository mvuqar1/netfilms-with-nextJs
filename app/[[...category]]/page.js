import Image from 'next/image'
import styles from '../page.module.css'
import HomeContainer from '../../containers/home/index'
import {getCategories,getSingleCategories,getTopRatedMovies,getPopularMovies } from "../../services/moviesApi";



export default async function Home({params}) {
  
  let selectedCategory
  if(params.category?.length>0){
    const {results}=await getSingleCategories(params.category[0])
    selectedCategory=results
  }


  const [
    {genres:categories},
    {results:topRatedMovies},
    {results:popularMovies}
  ]=await Promise.all([getCategories(),getTopRatedMovies(),getPopularMovies()])

  return (
    <>
      <HomeContainer 
       selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ?selectedCategory.slice(0,7):[],
      }}
      categories={categories} 
      topRatedMovies={topRatedMovies} 
      popularMovies={popularMovies} 
      />
    </>
  )
}






































// import React from "react";
// import HomeContainer from '../../containers/home/index'


// async function delay(ms){
//   return new Promise((resolve)=>{
    
//     setTimeout(() => {
//       resolve()
//     }, ms);

//   })
// }

// import {
//   fetchPopularMovies,
//   fetchTopRatedMovies,
//   fetchGenres,
//   fetchMoviesByGenre,
// } from "@/services/movie";

// export default async function CategoryPage({ params }) {
//   const pagePromises = [
//     fetchPopularMovies(),
//     fetchTopRatedMovies(),
//     fetchGenres(),
//   ];

//   if (!!params.category?.length) {
//     pagePromises.push(fetchMoviesByGenre(params.category[0]));
//   }

//   const [popularMovies, topRatedMovies, genres, selectedCategoryMovies] =
//     await Promise.all(pagePromises);

//   return (
//     <HomeContainer
//       categories={genres}
//       popularMovies={popularMovies}
//       topRatedMovies={topRatedMovies}
//       selectedCategory={{
//         id: params.category?.[0] ?? "",
//         movies: selectedCategoryMovies ?? [],
//       }}
//     />
//   );
// }