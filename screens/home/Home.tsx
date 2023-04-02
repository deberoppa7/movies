import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Dimensions, FlatList, TouchableOpacity, View } from "react-native";
import * as API from "../../api";
import styles from "./home.styles";
import type { RootStackParamList } from "../../router/types";
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MovieDataType } from "../../types";
import { SingleMovie } from "../../components";
import { Loader } from "../../components/ui";
import { COLORS } from "../../config";
import StoreContext, { StoreProviderValueType } from "../../context/store";
import { mapMoviesToCheckIfIsAddedToFavorites } from "../../helpers";


type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList,'HOME'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList,'HOME'>;

type HomePropsType = {
    navigation : HomeNavigationProp;
    route : HomeScreenRouteProp;
};

const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_MARGIN = SCREEN_WIDTH < 420 ? SCREEN_WIDTH * 0.015 : SCREEN_WIDTH * 0.02;
const NUM_COLUMNS = 3;

const Home = ({ navigation } : HomePropsType ) => {

    const { favorites } = useContext<StoreProviderValueType>(StoreContext);

    const [data, setData] = useState<MovieDataType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const page = useRef(1);

    useEffect(() => {
        fetchData()
    }, []);
   
    useEffect(() => {
        if(data.length && favorites){
            const mappedData = mapMoviesToCheckIfIsAddedToFavorites(favorites, data);
            setData(mappedData);
        }
    }, [favorites]);

    const fetchData = async () => {
        
        try{
            setIsLoading(true);

            const response = await API.getAllMovies(page.current);
            const mappedData = mapMoviesToCheckIfIsAddedToFavorites(favorites, [...data, ...response.results]);

            setData(mappedData);

            page.current++;
        }
        catch(err){
            // console.log(err);
            setIsLoading(false)
        }

    }

    const renderMovie = useCallback(({ item } : {item : MovieDataType}) => {
    
        return (
            <TouchableOpacity 
                key={item.id} 
                style={[styles.movieWrapper, { margin: ITEM_MARGIN }]} 
                onPress={()=>navigation.navigate('MOVIE', { 
                        movieId : item.id, 
                        poster_path : item.poster_path, 
                        title: item.title, 
                        release_date : item.release_date 
                    })
                }
            >
                <SingleMovie data={item} />
            </TouchableOpacity>
        )
        
    }, [])

    const renderFooter = () => { 
        return <Loader show={isLoading} color={COLORS.theme.red} />
    }

    return(
        <View testID="home" style={[ styles.container ]} >
            <FlatList
                style={[ styles.flatList ]} 
                contentContainerStyle={styles.contentContainer} 
                data={data}
                renderItem={renderMovie}
                keyExtractor={(item) => item.id.toString()}
                onEndReached={fetchData}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
                numColumns={NUM_COLUMNS}
                testID="movies-list" 
            />
        </View>
        
    )
}

export default Home;
