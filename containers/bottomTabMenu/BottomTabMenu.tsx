import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import Icon from "../../components/ui/icon/Icon";
import styles from "./bottomTabMenu.styles"
import { COLORS } from "../../config";
import { TabNavigationState } from "@react-navigation/native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type BottomTabMenuPropsType = {
    state : TabNavigationState<any>
    descriptors : any
    navigation : any
} 

const BottomTabMenu = ({ state, descriptors, navigation } : BottomTabMenuPropsType)  => {

    const insets = useSafeAreaInsets();
    const isIphoneVirtualHomebutton = Platform.OS === 'ios' && insets.bottom > 0;

    const renderItem = () => {
       
        return state.routes.map((route, index) => {

            const { options } = descriptors[route.key];
            const label =
                options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;
    
            const isFocused = state.index === index;
    
            const onPress = () => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                });
        
                if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                }
            };
    
            const onLongPress = () => {
                navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                });
            };

            const getIconName = () => {
                if( route.name.toUpperCase() === "HOME_STACK") return 'home';
                else if( route.name.toUpperCase() === "FAVORITES_STACK") return 'star';
            }

            const STATUS_STYLE = { color: isFocused ? COLORS.theme.red : COLORS.theme.lightGray }
    
            return (
                <TouchableOpacity
                    key={index}
                    accessibilityRole="button"
                    accessibilityState={ isFocused ? {selected : true} : {} }
                    accessibilityLabel={ options.tabBarAccessibilityLabel }
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={styles.item}
                >
                    <Icon name={getIconName()} size={20} style={[styles.itemIcon, STATUS_STYLE ]} />
                    <Text style={[styles.itemText, STATUS_STYLE ]}>{label}</Text>
                </TouchableOpacity>
            );
        });
    }
    

    return (
        <View style={[styles.container, isIphoneVirtualHomebutton && {height : 81}]}>
            <View  style={styles.inner} >
                {renderItem()}
            </View>
        </View>
    );
}

export default BottomTabMenu;