import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView, Image } from "react-native";
import * as API from "../../api";
import styles from "./movie.styles";
import type { RootStackParamList } from "../../router/types";
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MovieDataType } from "../../types";
import { Button, Icon, Loader, Text } from "../../components/ui";
import Constants from 'expo-constants';
import Toast from 'react-native-root-toast';
import StoreContext, { StoreProviderValueType } from "../../context/store";
import { COLORS } from "../../config";


type MovieNavigationProp = NativeStackNavigationProp<RootStackParamList,'MOVIE'>;
type MovieScreenRouteProp = RouteProp<RootStackParamList,'MOVIE'>;

type MoviePropsType = {
    navigation : MovieNavigationProp;
    route : MovieScreenRouteProp;
};

const TOAST_DURATION = 3000;
 
const Movie = ({ navigation, route } : MoviePropsType) => {

    const { favorites, setFavorites } = useContext<StoreProviderValueType>(StoreContext);

    const [data, setData] = useState<MovieDataType| undefined>();
    const [isLoading, setIsLoading] = useState(true);

    const { movieId, title, release_date, poster_path} = route.params;

    const POSTER_URI = `${Constants.manifest?.extra?.BASE_IMAGE_URL}/w500${poster_path}`;


    useEffect(() => {

        setIsLoading(true);

        // FETCH MOVIE'S DATA
        (async ()=>{
            try{
                const response = await API.getSingleMovie(movieId);
                setData({
                    ...response,
                    addedToFavorites : !!favorites.find((el)=> el.id === response.id)
                });
                setIsLoading(false);
            }
            catch(err){
                console.log(err)
                setIsLoading(false);
            }
            
        })()

    }, []);


    const showToast = () => {

        if(data){
            setData({
                ...data,
                addedToFavorites : !data?.addedToFavorites
            })
            // STORE FAVORITES
            if(!data.addedToFavorites)
                setFavorites([...favorites, {
                    ...data,
                    addedToFavorites : true
                }]);
            else
                setFavorites(favorites.filter((el)=>el.id !== data.id))
        }

        let toast = Toast.show(`"${data?.title}" ${!data?.addedToFavorites ? "was added to the favorites" : "was removed from favorites"}`, {
            duration: Toast.durations.LONG,
            position: 60,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            containerStyle : styles.toastContainer,
            textStyle : styles.toastTest
        });

        setTimeout(function () {
            Toast.hide(toast);
        }, TOAST_DURATION);
    }

    const renderDetails = () => {
        
        return (
            <>
                <View style={styles.row}>
                    <Text type="title2">Overview</Text>
                    <Text type="text" style={styles.text}>{data?.overview}</Text>
                </View>

                <View style={styles.row}>
                    <Text type="title2">Numbers</Text>
                    <Text type="text" style={styles.info}>Popularity : {data?.popularity}</Text>
                    <Text type="text" style={styles.info}>Votes : {data?.vote_count}</Text>
                </View>

                {/* LIKE BUTTON */}
                <Button
                    iconName="heart" 
                    onPress={showToast}  
                    label={`${data?.addedToFavorites ? 'Remove from favorites' : 'Add to favorites'}`} 
                    containerStyle={styles.likeButton}
                />
            </>
        )

    }
    
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >

            {/* LIKE ICON */}
            <Icon name="heart" size={23} style={[styles.likeIcon, data?.addedToFavorites && styles.activeLikeIcon ]} />

            <View style={styles.postureBox} >
                <Image source={{uri : POSTER_URI }} style={styles.posture} resizeMode="cover" />
            </View>

            <Text type="title2">{title}</Text>
            <Text type="text" style={styles.releaseDate}>{release_date}</Text>

            {/* DETAILS */}
            { data && renderDetails() }

            {/* LOADER */}
            <Loader show={isLoading} />

        </ScrollView>
    )
}
export default Movie;
