import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import "./global.css"
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Splash from './src/components/Splash';
import AppNavigation from './src/navigation/AppNavigation';
import LoginScreen from './src/screens/Auth/LoginScreen';
import AuthNavigation from './src/navigation/AuthNavigation';
import { FirebaseAuthTypes, getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import messaging, { getMessaging, getToken, requestPermission } from '@react-native-firebase/messaging';
import { getApp } from '@react-native-firebase/app';
import StackNavigation from './src/navigation/AppNavigation';

const App = () => {
  
  const isDark = useColorScheme() === 'dark';

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  async function requestUserPermission() {
    try{
      const app = getApp();
      const messaging = getMessaging(app);
      const authStatus = await requestPermission(messaging)
      const token = await getToken(messaging);
      console.log("Permission granted "+authStatus);
      console.log("token :"+token);
    }catch(err){
      console.log("Permission denied :"+err);
    }
  }

  useEffect(() => {
    requestUserPermission();
    const subscribe = onAuthStateChanged(getAuth(), (u) => {
      setUser(u);
      console.log(u);
      if(loading) setLoading(false);
    });

    return () => subscribe();

  }, [])

  if(loading){
    return <Splash/>
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
            animated={true}
            barStyle={isDark ? 'dark-content' :'light-content'}
            backgroundColor={'#f2f2f2'}
          />
        {!user ? <AuthNavigation/>  :  <StackNavigation/>}
      </NavigationContainer>
    </SafeAreaProvider>
    // <View className='flex-1 justify-center items-center bg-[#f2f2f2]'>
    //   <Text className='text-yellow-500 text-5xl'>App</Text>
    // </View>
  )
}

export default App

const styles = StyleSheet.create({})