import { StyleSheet } from 'react-native';
import { COLORS } from '../../config';

export default StyleSheet.create({

    container : {
        backgroundColor : COLORS.theme.black,
        flex : 1,
    },

    flatList : {
        flex : 1
    },

	contentContainer : {
        paddingTop: 85, // CUSTOM HEADER COMPONENT HEIGHT
        paddingBottom: 50 // CUSTOM BOTTOM TAB COMPONENT HEIGHT
    },

    movieWrapper : {
        marginBottom : 10,
        width : '30%'
    },

    noContent : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },

    noContentText : {
        textAlign : 'center',
        color : COLORS.theme.lightGray,
        fontSize : 14
    }
})