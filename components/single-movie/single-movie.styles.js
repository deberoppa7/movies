import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

export default StyleSheet.create({

	container : {
        height : 255,
        width : "100%"
    },

    poster : {
        width : 130,
        height : 195,
        borderRadius : 15,
        overflow : "hidden",
        marginBottom : 5
    },

    infos : {

    },

    title : {
        fontFamily : "bold",
        fontSize : 14,
        marginBottom : 3
    }, 

    year : {
        color : COLORS.theme.gray,
        fontSize : 12
    },

    likeIcon : {
        position : "absolute",
        top : 8,
        right : 5,
        color : COLORS.theme.lightGray
    }

})