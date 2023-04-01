import { LoadingOfferItemPropsType } from "../components/loading-offer-item";

export type RootStackParamList = {
    HOME : undefined, 
    MOVIE : { 
        movieId : id,
        poster_path : string,
        title : string,
        release_date : string
    },
    FAVORITES : undefined,
    TAB_NAVIGATOR : {
        screen : 'HOME_STACK'
        params :{
            screen : "HOME",
        }
    }
}