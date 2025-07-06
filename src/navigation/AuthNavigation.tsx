import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';

export type RootTabParamList = {
    Login:undefined;
    Signup:undefined;
}

const Tab = createBottomTabNavigator<RootTabParamList>();

const AuthNavigation = () => {

  return (
    <Tab.Navigator screenOptions={{
        animation: 'fade',
        headerShown:false,
        tabBarStyle:{
            display:'none'
        }
      }}>
        <Tab.Screen name='Login' component={LoginScreen} />
        <Tab.Screen name='Signup' component={SignupScreen} />
    </Tab.Navigator>
  )
}

export default AuthNavigation