import { StyleSheet } from 'react-native';
import { COLORS } from '../../../config';

export default StyleSheet.create({

	container: {
        height : 52,
        paddingHorizontal : 30,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : COLORS.theme.blue,
        borderRadius : 52/2,
        flexDirection  : 'row',
        width : "100%"
    },

    text : {
        color : "white",
        fontFamily : 'semiBold',
        fontSize : 16,
        lineHeight: 18,
        textAlign : "center"
    },

    icon : {
        marginRight : 6,
        top : .5,
        color : "white"
    },

    disabled : {
        opacity : .5
    }
   
})