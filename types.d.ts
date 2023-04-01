import { ReactNode } from "react";
import { TextInput } from "react-native";
import { Text, TextStyle, ViewStyle } from "react-native/types";


export type MovieDataType = {
	id : number
	poster_path : string
	adult : boolean
	overview : string
	release_date : string
	genre_ids : number[]
	original_title : str
	original_language : string
	title : string
	backdrop_path : string | null
	popularity : number
	vote_count : number
	video : boolean
	vote_average : number

	// ADDED PROPS FOR UI
	addedToFavorites? : boolean
}




