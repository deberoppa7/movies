import React from 'react';
import { Text, ViewStyle, TextStyle, TouchableHighlight, View } from "react-native";
import styles from "./button.styles"
import Loader from '../loader/Loader';
import Icon from '../icon/Icon';

export type ButtonPropsType = {
	onPress : () => void
    label : string
    iconName? : string
    containerStyle? : ViewStyle 
    textStyle? : TextStyle 
    iconStyle? : ViewStyle
    disabled? : boolean
    isLoading? : boolean
    loaderColor? :  string
}

const Button = ({ onPress, label, iconName, containerStyle, textStyle, iconStyle, disabled, loaderColor, isLoading } : ButtonPropsType) => {

    return (
        <TouchableHighlight testID="button" onPress={() => onPress && onPress()} disabled={disabled || isLoading} activeOpacity={.7}>
            <View style={[ styles.container, containerStyle, disabled && styles.disabled ]}>
            
                { iconName && !isLoading && <Icon style={[styles.icon, iconStyle]} name={iconName} size={14} /> }
                { !isLoading && <Text style={[styles.text, textStyle ]}>{label}</Text> }

                {/* LOADER */}
                { isLoading && <Loader show={true} color={loaderColor} /> }

            </View>
        </TouchableHighlight>
    )
}

export default React.memo(Button);