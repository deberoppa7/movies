import React from "react";
import { View, TouchableOpacity, StyleSheet, Platform, Image } from "react-native";
import { BlurView } from 'expo-blur';
import styles from "./header.styles";
import Icon from "../../components/ui/icon/Icon";
import { StackHeaderProps } from "@react-navigation/stack";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type HeaderType = StackHeaderProps & {
    showBackButton?: boolean,
    showLogo?: boolean,
}

const Header = ({ navigation, showBackButton, showLogo } : HeaderType) => {

    const insets = useSafeAreaInsets();
    const isNotch = (Platform.OS === 'ios') && (insets.top > 40);

    const renderBackButton = () => {
        return (
            <TouchableOpacity 
                style={[styles.backButton, isNotch && { top : 0}]} 
                onPress={() => navigation.pop()} 
                hitSlop={{top : 10, right : 10, bottom : 10, left : 10}} 
            >
                <Icon name="back" style={styles.backIcon} size={22} />
            </TouchableOpacity>
        )
    }

    const renderTheLogo = () => { 
        return (
            <View style={[styles.logoBox, isNotch && { height : 110, paddingTop : 30}]}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain"  />
            </View>
        )
    }

    return (
        <View style={[styles.container, isNotch && { height : 110, paddingTop : 10} ]}>
            <View style={styles.inner} >
                { showBackButton && renderBackButton() }
                { showLogo && renderTheLogo()}
            </View>
        </View>
    )
}

export default Header;



