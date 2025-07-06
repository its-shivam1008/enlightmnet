import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'

const Course = () => {
  return (
    <SafeAreaView className='px-5 flex-1'>
      <View className='flex flex-row justify-between items-center my-4'>
        <Text className='text-emerald-600 text-3xl '>Courses</Text>
      </View>
      <View>
        <Text className='font-thin text-2xl my-4'>See through our some premium courses.</Text>
      </View>
      <ScrollView
        contentContainerStyle={{gap:10}}
      >
        <View className='w-[95%] h-96 border-2 border-black rounded-[12px] mx-auto my-5'>
          <View className='w-full h-[60%] rounded-[12px]'>
            <Image source={require('../assets/yt-course.jpg')} className='w-[100%] h-[100%] rounded-[12px]' />
            <View className="flex justify-between w-[90%] mx-auto items-center">
              <Text className='text-left text-wrap text-xl font-bold my-3 text-black'>Youtube course for those who wanted to be a youtuber in near future</Text>
              <Pressable className='bg-black py-4 rounded-full px-2 w-full my-2'>
                <Text className='mx-auto text-white font-bold tracking-wider'>BUY</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View className='w-[95%] h-96 border-2 border-black rounded-[12px] mx-auto my-5'>
          <View className='w-full h-[60%] rounded-[12px]'>
            <Image source={require('../assets/english-course.jpg')} className='w-[100%] h-[100%] rounded-[12px]' />
            <View className="flex justify-between w-[90%] mx-auto items-center">
              <Text className='text-left text-wrap text-xl font-bold my-3 text-black'>Learn english with full fluency and speak with confidence </Text>
              <Pressable className='bg-black py-4 rounded-full px-2 w-full my-2'>
                <Text className='mx-auto text-white font-bold tracking-wider'>BUY</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View className='w-[95%] h-96 border-2 border-black rounded-[12px] mx-auto my-5'>
          <View className='w-full h-[60%] rounded-[12px]'>
            <Image source={require('../assets/dm-course.jpg')} className='w-[100%] h-[100%] rounded-[12px]' />
            <View className="flex justify-between w-[90%] mx-auto items-center">
              <Text className='text-left text-wrap text-xl font-bold my-3 text-black'>Latest Digital marketing course learn it now and earn in dollars</Text>
              <Pressable className='bg-black py-4 rounded-full px-2 w-full my-2'>
                <Text className='mx-auto text-white font-bold tracking-wider'>BUY</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View className='w-[95%] h-96 border-2 border-black rounded-[12px] mx-auto my-5 mb-40'>
          <View className='w-full h-[60%] rounded-[12px]'>
            <Image source={require('../assets/maths-course.jpg')} className='w-[100%] h-[100%] rounded-[12px]' />
            <View className="flex justify-between w-[90%] mx-auto items-center">
              <Text className='text-left text-wrap text-xl font-bold my-3 text-black'>Calculus course designed by MIT university to excel your academics</Text>
              <Pressable className='bg-black py-4 rounded-full px-2 w-full my-2'>
                <Text className='mx-auto text-white font-bold tracking-wider'>BUY</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Course