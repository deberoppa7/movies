import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

import { COLORS } from '../../config';

export default StyleSheet.create({
    container: {
        minHeight: 80,
        width: '100%',
        backgroundColor : COLORS.theme.black,
        overflow : 'hidden'
    },

    inner: {
        paddingTop: Constants.statusBarHeight + 5,
        paddingBottom: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent : 'center',
        alignItems: 'center'
    },

    backButton : {
       marginRight : 'auto',
       zIndex : 1,
       position : 'relative',
       top : 15
    },

    backIcon: {
        color: COLORS.theme.red,
    },

    logoBox : {
        position: 'absolute',
        left : 0,
        right : 0,
        top : 0,
        bottom : 0,
        height : 80,
        zIndex : 0,
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop : 20
    },

    logo: {
        width: 100,
        height: 40
    },
});
