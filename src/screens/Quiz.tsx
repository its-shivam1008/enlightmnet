import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { RootTabParamListAppNav } from '../navigation/AppNavigation'

const Quiz = () => {
  const navigation = useNavigation<any>();


  const handlePress = (quizSubject:string) =>{
     navigation.navigate('QuizTest', {quizSubject})
  }
  return (
    <SafeAreaView className='px-5 flex-1'>
      <View className='flex flex-row justify-between items-center my-4'>
        <Text className='text-emerald-600 text-3xl '>Quiz</Text>
      </View>
      <View>
        <Text className='font-thin text-2xl my-4'>Test yourself.</Text>
      </View>
      <ScrollView
        contentContainerStyle={{gap:10}}
      >
        <Pressable onPress={() => handlePress('history')}>
          <View className='w-[95%] h-56  rounded-[12px] mx-auto my-5'>
            <View className='w-full h-full '>
              <Image source={require('../assets/history-quiz.jpg')} className='w-[100%] h-[100%] rounded-[12px]' />
              <View className='absolute  w-[100%] h-[100%] rounded-[12px]'>
                <Text className='text-center text-wrap text-3xl font-bold mx-auto my-auto text-white'>History quiz</Text>
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => handlePress('general_knowledge')}>
          <View className='w-[95%] h-56  rounded-[12px] mx-auto my-5'>
            <View className='w-full h-full '>
              <Image source={require('../assets/cySec-quiz.jpg')} className='w-[100%] h-[100%] rounded-[12px]' />
              <View className='absolute  w-[100%] h-[100%] rounded-[12px]'>
                <Text className='text-center text-wrap text-3xl font-bold mx-auto my-auto text-white'>General Knowledge quiz</Text>
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => handlePress('music')}>
          <View className='w-[95%] h-56  rounded-[12px] mx-auto my-5'>
            <View className='w-full h-full '>
              <Image source={require('../assets/music.jpg')} className='w-[100%] h-[100%] rounded-[12px]' />
              <View className='absolute  w-[100%] h-[100%] rounded-[12px]'>
                <Text className='text-center text-wrap text-3xl font-bold mx-auto my-auto text-white'>Music quiz</Text>
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => handlePress('science')}>
          <View className='w-[95%] h-56  rounded-[12px] mx-auto my-5'>
            <View className='w-full h-full '>
              <Image source={require('../assets/science-quiz.jpg')} className='w-[100%] h-[100%] rounded-[12px]' />
              <View className='absolute  w-[100%] h-[100%] rounded-[12px]'>
                <Text className='text-center text-wrap text-3xl font-bold mx-auto my-auto text-white'>Science quiz</Text>
              </View>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => handlePress('technology')}>
          <View className='w-[95%] h-56  rounded-[12px] mx-auto my-5 mb-40'>
            <View className='w-full h-full '>
              <Image source={require('../assets/computer-quiz.jpg')} className='w-[100%] h-[100%] rounded-[12px]' />
              <View className='absolute  w-[100%] h-[100%] rounded-[12px]'>
                <Text className='text-center text-wrap text-3xl font-bold mx-auto my-auto text-white'>Technology quiz</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Quiz