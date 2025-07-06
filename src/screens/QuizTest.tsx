import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pressable } from 'react-native';
import { Alert } from 'react-native';
import axios from 'axios';
import { FlatList } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamListAppNav } from '../navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';

const QuizTest = ({route}:{route:any}) => {
  const {quizSubject} = route.params;

  const navigation = useNavigation<any>();

  const [data,setData] = useState<any>(null);
  const [selectedOption, setSelectedOption] = useState<any>({});
  const [shuffledQuestions, setShuffledQuestions] = useState<any>([]);

  const url = `https://the-trivia-api.com/api/questions?categories=${quizSubject}&limit10`;

  const fetchQuestions = async () => {
    try{
      const res = await axios.get(url);
      setData(res.data)
    }catch(err){
      Alert.alert("there is an error : "+err);
    }
  }

  const handleSubmit = () => {
    let score = 0;
    for(let i=0; i<shuffledQuestions.length; i++){
      if(shuffledQuestions[i]?.correctAnswer === selectedOption[i]){
        score = score + 1;
      }
    }
    navigation.navigate("ScoreAchievement", {score});
  }
  
  useEffect(() => {
    fetchQuestions();
  }, [quizSubject])

  useEffect(() => {
    if(data){
      const shuffled = data.map((q:any) => {
        const allOptions = [...q.incorrectAnswers, q.correctAnswer];
        const shufldOpts = allOptions.map((opt) => ({opt, sort: Math.random()})).sort((a,b) => a.sort - b.sort).map(({opt}) => opt);
        return {
          ...q,
          shuffledOptions:shufldOpts
        }
      })
      setShuffledQuestions(shuffled);
    } 
  }, [data])
  

  const renderItems = ({item, index}:{item:any, index:number}) => {
    return (
      <View className='p-4 border-b-2 border-b-gray-300'>
        <Text className='text-xl font-bold mb-2'>Q{index+1}. {item.question}</Text>
        {
          item.shuffledOptions.map((option:string, idx:number) => (
            <TouchableOpacity key={idx} className='flex flex-row items-center' onPress={() => setSelectedOption((prev:any) => ({...prev, [index]:option}))}>
              <Text className={`${selectedOption[index]===option &&  'bg-emerald-500 px-2 text-white border-green-600 border-2' } border-2 border-transparent rounded-[8px] text-lg py-2`}>{option}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }

  


  return (
    <SafeAreaView className='flex-1 px-5'>
      <View className='flex flex-row justify-between items-center my-4'>
        <Text className='text-emerald-600 text-3xl '>{(quizSubject as string).toUpperCase().split("_").join(" ")}</Text>
      </View>
      <View>
        <Text className='font-thin text-2xl my-4'>These are some questions.</Text>
      </View>
      {data && <FlatList 
        data={shuffledQuestions}
        renderItem={renderItems}
        keyExtractor={item => item.id}
      />}

      <Pressable onPress={handleSubmit} className='w-full bg-emerald-500 py-3 rounded-[8px] mx-auto mb-10'>
        <Text className='text-white tracking-wider mx-auto'>SUBMIT</Text>
      </Pressable>

    </SafeAreaView>
  )
}

export default QuizTest