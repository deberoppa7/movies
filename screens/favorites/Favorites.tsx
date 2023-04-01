import React, { useContext, useCallback } from "react";
import { Dimensions, FlatList, TouchableOpacity, View } from "react-native";
import styles from "./favorites.styles";
import type { RootStackParamList } from "../../router/types";
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MovieDataType } from "../../types";
import { SingleMovie } from "../../components";
import StoreContext, { StoreProviderValueType } from "../../context/store";
import { Text } from "../../components/ui";


type FavoritesNavigationProp = NativeStackNavigationProp<RootStackParamList,'FAVORITES'>;
type FavoriteScreenRouteProp = RouteProp<RootStackParamList,'FAVORITES'>;

type FavoritesPropsType = {
    navigation : FavoritesNavigationProp;
    route : FavoriteScreenRouteProp;
};

const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_MARGIN = SCREEN_WIDTH < 420 ? SCREEN_WIDTH * 0.015 : SCREEN_WIDTH * 0.02;
const NUM_COLUMNS = 3;

const Favorites = ({ navigation } : FavoritesPropsType ) => {

    const { favorites } = useContext<StoreProviderValueType>(StoreContext);

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
                })}
            >
                <SingleMovie data={item} />
            </TouchableOpacity>
        )
        
    }, [])

    const renderNoContent = () => { 
        return (
            <View style={styles.noContent}>
                <Text type="text" style={styles.noContentText}>{`There are currently no movies\n added to favorites`}</Text>
            </View>
        )
    }

    const renderList = () => { 
        return (
            <FlatList
                style={[ styles.flatList ]} 
                contentContainerStyle={styles.contentContainer} 
                data={favorites}
                renderItem={renderMovie}
                keyExtractor={(item) => item.id.toString()}
                numColumns={NUM_COLUMNS}
            />
        )
     }


    return(
        <View style={[ styles.container ]} testID="favorites" >
            { !favorites.length ? renderNoContent() : renderList()}
        </View>
        
    )
}

export default Favorites;
