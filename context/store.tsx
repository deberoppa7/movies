import React, { useEffect, useState } from "react";
import { getFavoritesToAsyncStorage, storeFavoritesToAsyncStorage } from "../helpers";
import { MovieDataType } from "../types";


export type StoreProviderValueType = {
    favorites : MovieDataType[];
    setFavorites : (movies : MovieDataType[]) => void;
}

const StoreContext : any = React.createContext(null);

export const StoreProvider = ({children} : any) => {

    // MOVIES ADDED TO FAVORITES
    const [favorites, setFavorites] = useState<MovieDataType[]>([]);

    useEffect(()=>{
        (async ()=>{
            // GET FAVORITES FROM ASYNCSTORAGE
            const data = await getFavoritesToAsyncStorage()
            if(data)
                setFavorites(data);
            }
        )()
    },[])

    useEffect(()=>{
        // SET FAVORITES FROM ASYNCSTORAGE
        storeFavoritesToAsyncStorage(favorites)
    },[favorites])


    const value : StoreProviderValueType = {
        favorites,
        setFavorites
    }

    return (
        <StoreContext.Provider {...{value}} >
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContext;



