import React, { ReactNode } from "react";
import { Text as ReactNativeText, TextComponent, TextStyle } from "react-native";
import styles from "./text.styles";

export type TextPropsType = {
	children : ReactNode
	type : "text" | "title1" | "title2"
	style? : TextStyle,
	[props : string] : any
} 

const Text = ({ children, type, style, ...props } : TextPropsType) => {
	return (
		<ReactNativeText  style={[ styles[type], style ]} {...props}>{children}</ReactNativeText>
	)
}

export default React.memo(Text);