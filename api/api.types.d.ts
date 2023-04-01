import { MovieDataType } from "../types"


export type ApiGetAllMoviesResponseType = {
    page : number
    results : MovieDataType[]
    total_pages : number
    total_results : number
}

export type ApiGetSingleMovieResponseType = MovieDataType




