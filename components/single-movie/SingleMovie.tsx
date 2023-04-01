import React from "react"
import { View, Image } from "react-native"
import { MovieDataType } from "../../types"
import { Icon, Text } from "../ui"
import styles from "./single-movie.styles"
import Constants from 'expo-constants';
import { COLORS } from "../../config"


const SingleMovie = ({ data } : {data : MovieDataType}) => { 

    const POSTER_URI = `${Constants.manifest?.extra?.BASE_IMAGE_URL}/w200${data.poster_path}`;

    return (
        <View style={styles.container} >

            <Image style={styles.poster} source={{ uri : POSTER_URI }} resizeMode="cover" />
            
            <View style={styles.infos}>
                <Text type="text" style={styles.title} numberOfLines={2} ellipsizeMode="tail" >{data.title}</Text>
                <Text type="text" style={styles.year} >{data.release_date}</Text>
            </View>

            <Icon name="heart" size={18} style={[styles.likeIcon, data.addedToFavorites && {color : COLORS.theme.red} ]} />
        </View>
    )
}

export default React.memo(SingleMovie);