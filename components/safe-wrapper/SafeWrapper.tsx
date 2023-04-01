import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform, View } from 'react-native';

const SafeWrapper = ( WrappedComponent : any ) => { 

	return (props : any) => {
		const insets = useSafeAreaInsets();

		const isNotch = Platform.OS === 'ios' && insets.top > 40;
	
		return (
			<View style={[{ flex: 1 }, isNotch && { paddingTop : 30} ]} >
				<WrappedComponent {...props} />
			</View>
		)
	}
 
}

export default SafeWrapper;