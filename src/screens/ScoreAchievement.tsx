import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamListAppNav } from '../navigation/AppNavigation';

const ScoreAchievement = ({route}:{route:any}) => {
    const {score} = route.params;
    const navigation = useNavigation<any>();
    const handleContinue = () => {
      navigation.navigate('MainTabs', {
        screen:'Quiz'
      });
    }
  return (
    <SafeAreaView className='flex-1 bg-emerald-500 justify-center items-center'>
      <View className='absolute top-10 my-4'>
        <Text className='text-white font-extrabold tracking-widest text-center text-3xl '>SCORE</Text>
      </View>
      <View className='w-[100%] mx-auto h-[50%]'>
        <Image source={require('../assets/rays.png')} className='w-[100%] h-[100%] rounded-[12px] animate-spin' />
        <Text className='text-white bg-yellow-500 text-[12rem] py-16 px-32 font-extrabold rounded-full absolute left-[13%] top-[14%]'>{score}</Text>
      </View>
      <Pressable onPress={handleContinue} className='bg-[#f2f2f2] w-[90%] py-4 absolute bottom-8 rounded-[8px]'>
        <Text className='tracking-widest text-emerald-500 font-bold mx-auto'>Continue</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default ScoreAchievement