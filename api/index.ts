
import Axios from "axios";
import Constants from 'expo-constants';
import { ApiGetAllMoviesResponseType, ApiGetSingleMovieResponseType } from "./api.types";


const API  = Constants.manifest?.extra?.API;

const HEADERS = {
    'content-type': 'application/json',
    "accept" : "application/json"
}
const PARAMS = {
    'api_key' : Constants.manifest?.extra?.SECRET_KEY,
    'language' : 'en-US'
}


export const getAllMovies = async (page : number) : Promise<ApiGetAllMoviesResponseType> => {
    const response = await Axios.get( `${API}/discover/movie`, {
        headers : HEADERS,
        params : {
            ...PARAMS,
            page
        }
    });
    return response.data;
}

export const getSingleMovie = async (movieId : string) : Promise<ApiGetSingleMovieResponseType> => {
    const response = await Axios.get( `${API}/movie/${movieId}`, {
        headers : HEADERS,
        params : PARAMS
    });
    return response.data;
}



