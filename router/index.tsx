import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator, StackHeaderProps } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { enableScreens } from 'react-native-screens';
import { RootStackParamList } from './types';
import * as screens from '../screens';
import SafeWrapper from '../components/safe-wrapper/SafeWrapper';
import { BottomTabMenu, Header } from '../containers';

enableScreens();
const RootStack: any = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();


const HOME_STACK = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HOME"
                component={SafeWrapper(screens.Home)}
                options={{
                    header: (props : StackHeaderProps) => <Header {...props} showLogo />,
                    headerTransparent: true,
                }}
            />
        </Stack.Navigator>
    );
};

const FAVORITES_STACK = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="FAVORITES"
                component={SafeWrapper(screens.Favorites)}
                options={{
                    header: (props : StackHeaderProps) => <Header {...props} showLogo />,
                    headerTransparent: true,
                }}
            />
        </Stack.Navigator>
    );
};


export default () => {

    useEffect(() => {
        // TO PREVENT A WHITE SCREEN TO APPEAR BEFORE THE INTENDED SCREEN.
        setTimeout(async()=>{
            await SplashScreen.hideAsync()
        }, 50)
      
    }, []);

    const TAB_NAVIGATOR = () => {
        return (
            <Tab.Navigator
                tabBar={(props) => <BottomTabMenu {...props} />}>
                <Tab.Screen 
                    name="HOME_STACK" 
                    component={HOME_STACK}
                    options={{ title: 'Trending', headerShown : false }}
                />
                <Tab.Screen
                    name="FAVORITES_STACK"
                    component={FAVORITES_STACK}
                    options={{ title: 'Favorites', headerShown : false }}
                />
            </Tab.Navigator>
        );
    };

    return (
        <NavigationContainer >
            <RootStack.Navigator initialRouteName={'HOME'} >

                <RootStack.Group screenOptions={{ statusBarTranslucent: true, headerShown: false  }} >

                    {/* TABS NAVIGATOR */}
                    <RootStack.Screen name="TAB_NAVIGATOR" component={TAB_NAVIGATOR} />
                    
                </RootStack.Group>

                <RootStack.Group screenOptions={{ statusBarTranslucent: true }}>
                    <RootStack.Screen
                        name="MOVIE"
                        component={SafeWrapper(screens.Movie)}
                        options={{
                            header: (props : StackHeaderProps) => <Header {...props} showBackButton  />,
                            headerTransparent: true,
                        }}
                    />
                </RootStack.Group>

            </RootStack.Navigator>
        </NavigationContainer>
    );
};
