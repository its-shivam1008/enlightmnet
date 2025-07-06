import { View, Text, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { RootTabParamList } from '../../navigation/AuthNavigation';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth';

const LoginScreen = () => {

    const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList>>();

    const [isShowPass, setIsShowPass] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async () => {
        try {
            const res = await signInWithEmailAndPassword(getAuth(), email, password);
            Alert.alert("Logged in success");
        } catch (err:any) {
            Alert.alert("This is an error : "+err.code.split('/')[1]);
        }
    }

  return (
    <SafeAreaView className='flex-1 bg-[#f2f2f2]'>
        <View className="flex-1 justify-center items-center">
            <View className='w-[90%] h-fit rounded-[12px] backdrop-blur-xl p-5 bg-emerald-200/30 flex  flex-col justify-center gap-5'>
                <Text className='text-3xl text-center text-wrap text-green-600'>Welcome back !</Text>
                <Text className='text-3xl text-center text-green-600 font-bold'>Login </Text>
                <TextInput keyboardType='email-address' value={email} onChangeText={setEmail} className='rounded-[8px] text-black  border-2 p-2 border-green-600 outline-2 outline-blue-500 mt-8' placeholderTextColor={'#6b7280'} placeholder='you@example.com' />
                <View className='w-fit h-fit'>
                    <TextInput keyboardType='default' value={password} onChangeText={setPassword} secureTextEntry={isShowPass} className='rounded-[8px] text-black  border-2 p-2 border-green-600 outline-2 outline-blue-500' placeholderTextColor={'#6b7280'} placeholder='Password' />
                    <Pressable className='absolute bottom-2.5 right-2' onPress={(isShowPass) => setIsShowPass(!isShowPass)}>
                        {isShowPass ? <Icon name="eye-slash" size={18} color="#16a34a" /> : <Icon name="eye" size={18} color="#16a34a" />}
                    </Pressable>
                </View>
                <Pressable className='bg-green-600 mx-auto w-[80%] p-3 my-5 rounded-[8px]' onPress={loginUser}>
                    <Text className='text-white font-bold mx-auto'>LOGIN</Text>
                </Pressable>
            </View>
            <Text className='my-4 text-xl'>Didn't have an account yet ? <Text onPress={() => navigation.navigate("Signup")} className='text-emerald-600 font-bold'>Sign up</Text> here.</Text>
        </View>
    </SafeAreaView>
  )
}

export default LoginScreen