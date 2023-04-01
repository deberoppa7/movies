import { StyleSheet } from 'react-native';
import { COLORS } from '../../config';

export default StyleSheet.create({

	container : {
        flex : 1,
        backgroundColor : COLORS.theme.black,
        paddingHorizontal : 10
    },

	contentContainer : {
        paddingTop: 90, // CUSTOM HEADER COMPONENT HEIGHT
        paddingBottom: 50 // CUSTOM BOTTOM TAB COMPONENT HEIGHT
    },

    postureBox : {
        width : 234,
        height : 351,
        borderRadius : 30,
        overflow : 'hidden',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : "#222",
        alignSelf : 'center',
        marginBottom : 30
    },

    posture : {
        width : 234,
        height : 351,
    },

    row: {
        marginTop : 40
    },

    releaseDate : {
        color : COLORS.theme.red,
        fontSize : 16,
        fontFamily : "semiBold"
    },

    info : {
        color : COLORS.theme.lightGray,
        fontSize : 16,
        fontFamily : "semiBold",
        marginBottom : 10
    },

    text : {
        fontSize : 16,
        lineHeight : 23,
        color : COLORS.theme.lightGray
    },

    likeButton : {
        marginTop : 20,
        backgroundColor : COLORS.theme.red
    },

    toastContainer : {
        backgroundColor : COLORS.theme.extraLightGray,
        borderRadius : 60,
        paddingHorizontal : 20
    },

    toastTest : {
        color : COLORS.theme.black
    },

    likeIcon : {
        position : 'absolute',
        top : 90,
        right : 30,
        color : COLORS.theme.darkGray,
        zIndex : 10,
    },

    activeLikeIcon : {
        color : COLORS.theme.red,
        backgroundColor : 'transparent'
    }
   
})