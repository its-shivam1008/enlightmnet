import { View, Text, Pressable, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { TextInput } from 'react-native'
import { getAuth, signOut } from '@react-native-firebase/auth'
import { Image } from 'react-native'
// import banner from ;

const Dashboard = () => {
  const [newText, setNewText] = useState<string>('');
  const [viewNewText, setViewNewText] = useState<string|null>(null)

  const handleLogout = async () => {
    try{
        await signOut(getAuth());
        Alert.alert("User Logout");
    } catch (err:any) {
        Alert.alert("This is an error : "+err.code.split('/')[1]);
    }
  }
  return (
    <SafeAreaView className='px-5 flex-1 '>
      <View className='flex flex-row justify-between items-center my-4'>
        <Text className='text-emerald-600 text-2xl '>Hi, {getAuth().currentUser?.email?.split("@")[0]}</Text>
        <Text className='text-emerald-600 text-xl' onPress={handleLogout}>Logout</Text>
      </View>
      <View>
        <Text className='text-2xl font-thin'>Welcome to Dashboard !!</Text>
      </View>
      <View className='w-[90%] h-56 bg-green-500 mx-auto my-6 rounded-[12px] '>
        <Image source={require('../assets/banner-dash.jpg')} className='w-[100%] h-[100%] rounded-[12px]' />
      </View>
      <View className='w-[95%] h-96  rounded-[12px] mx-auto my-12'>
        <View className='w-full h-full '>
          <Image source={require('../assets/illustration1.jpg')} className='w-[100%] h-[100%] rounded-[12px]' />
          <View className='absolute bg-green-100/60  w-[100%] h-[100%] rounded-[12px]'>
            <Text className='text-center text-wrap text-3xl font-bold mx-auto my-auto text-black'>We are here to provide you the best Courses and Quiz test materials.</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Dashboard