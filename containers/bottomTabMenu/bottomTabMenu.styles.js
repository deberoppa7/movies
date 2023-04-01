import { StyleSheet } from 'react-native';
import { COLORS } from '../../config';

export default StyleSheet.create({

	container : {
        height : 65,
        backgroundColor : COLORS.theme.black,
        shadowColor: "#ccc",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16
    },

    inner : {
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
    },


    item : {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

    itemIcon : {
        marginBottom: 7
    },

    itemText : {
        fontFamily: 'semiBold',
        fontSize: 13,
        lineHeight: 16
    }
   
})