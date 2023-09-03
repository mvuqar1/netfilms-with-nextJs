const API_URL = "https://api.themoviedb.org/3"

const fetchMovieApi = async (pathnane, guery) => {
    const res = await fetch(`${API_URL}${pathnane}?api_key=${process.env.api_secret_key}${guery?guery:""}`)
    return await res.json()
}

const getCategories = async () => {
    const res = await fetchMovieApi("/genre/movie/list", "&page=1")
    return res

    //   const res=await fetch(`${API_URL}/genre/movie/list?api_key=${process.env.api_secret_key}&page=1`)
    //   return await res.json()
}
const getSingleCategories = async (genreId) => {
    const res = await fetchMovieApi("/discover/movie/", `&with_genres=${genreId}`)
    return res

    //   const res=await fetch(`${API_URL}/discover/movie/?api_key=${process.env.api_secret_key}&with_genres=${genreId}`)
    //   return await res.json()
}
const getTopRatedMovies = async () => {
    const res = await fetchMovieApi("/movie/top_rated", "&page=1")
    return res

    //   const res=await fetch(`${API_URL}/movie/top_rated?api_key=${process.env.api_secret_key}&page=1`)
    //   return await res.json()
}
const getPopularMovies = async () => {
    const res = await fetchMovieApi("/movie/popular","&page=1")
    return res

    // const res = await fetch(`${API_URL}/movie/popular?api_key=${process.env.api_secret_key}&page=1`)
    // return await res.json()
}

const getMovie = async (movieId) => {
    const res = await fetchMovieApi(`/movie/${movieId}`)
    return res

    // const res = await fetch(`${API_URL}/movie/${movieId}?api_key=${process.env.api_secret_key}`)
    // return await res.json()
}
export { getCategories, getSingleCategories, getTopRatedMovies, getPopularMovies, getMovie }