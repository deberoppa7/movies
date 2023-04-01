import Router from './router';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { PRIMARY_FONTS } from "./config";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StoreProvider } from './context/store';
import { RootSiblingParent } from 'react-native-root-siblings';
import { View } from 'react-native';

export default function App() {

	const [assetsLoaded, setAssetsLoaded] = useState(false);

	useEffect(() => {

		(async ()=>{
			// PREVENT NATIVE SPLASH SCREEN FROM AUTO-HIDING
			try {
				await SplashScreen.preventAutoHideAsync();
			} 
			catch (err) {
				// console.warn(err);
			}
		})();

		prepareResources();

	}, []);


	const prepareResources = async () => {
		try {
			await downloadAssets();
			setAssetsLoaded(true);
		} 
		catch (e) {
			// console.warn(e);
		} 
	}

	const downloadAssets = async () => {
		// FONTS
		await Font.loadAsync(PRIMARY_FONTS);
	}

	return (
		<View testID="app" style={{flex : 1}}>
			<StatusBar style="light" translucent={true} />

			<RootSiblingParent> 
				<SafeAreaProvider>
					<StoreProvider>
						{ assetsLoaded && <Router/> }
					</StoreProvider>
				</SafeAreaProvider>
			</RootSiblingParent> 
		</View>
		
	);
}
