import React from 'react';
import { ActivityIndicator, StyleProp, ViewStyle } from "react-native"; 
import { COLORS } from '../../../config';

type LoaderPropsType = {
    show : boolean,
    size? : number | "small" | "large",
    color? : string,
    style? : StyleProp<ViewStyle>
}

const Loader = (props : LoaderPropsType) => {

    return (
        <>
            {
                props.show 
                    ?   <ActivityIndicator
                            style={props.style}
                            animating={true}
                            size={props.size} 
                            hidesWhenStopped={true} 
                            color={props.color || COLORS.theme.black} 
                        />
                    :   null
            }
        </>
    )
}

export default React.memo(Loader);