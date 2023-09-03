
// import Movies from "../../mocks/movies.json"
// import CategoriesData from "../../mocks/genres.json"


import { FeaturedMovie } from '@/components/featured-movie'
import Categories from '@/components/categories'
import MoviesSection from '@/components/movies-section'


export default function HomeContainer({selectedCategory,categories,topRatedMovies,popularMovies}) {
  return (
    <div>
        <FeaturedMovie movie={topRatedMovies?.[0]}/>
        <Categories categories={categories.slice(0,5)}/>
         {!!selectedCategory.movies.length && (
        <MoviesSection
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(1, 7)}
        />
      )}
        <MoviesSection title="Top Rated" movies={topRatedMovies.slice(1, 8)}/>
        <MoviesSection title="Popular Films" movies={popularMovies.slice(8, 15)}/>
    </div>
  )
}
