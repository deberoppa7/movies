import { MovieDataType } from "../types";
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const mapMoviesToCheckIfIsAddedToFavorites = (favorites : MovieDataType[], newData : MovieDataType[]) => { 
    return newData.map((el)=>({
            ...el,
            addedToFavorites : !!favorites.find((mov)=> mov.id === el.id)
        }
    ))
}


export const storeFavoritesToAsyncStorage = async (data : MovieDataType[]) => {
    try {
        await AsyncStorage.setItem(Constants.manifest?.extra?.ASYNC_STORAGE?.FAVORITES, JSON.stringify(data))
    } 
    catch (err) {
        console.log(err)
    }
}

export const getFavoritesToAsyncStorage = async () => {
    try {
        const result = await AsyncStorage.getItem(Constants.manifest?.extra?.ASYNC_STORAGE?.FAVORITES)
        if(result !== null) return JSON.parse(result);
    } 
    catch (err) {
        console.log(err)
    }
}