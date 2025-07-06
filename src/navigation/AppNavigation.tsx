import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
import Dashboard from "../screens/Dashboard";
import Course from "../screens/Course";
import Quiz from "../screens/Quiz";
import { View } from "react-native";
import QuizTest from "../screens/QuizTest";
import ScoreAchievement from "../screens/ScoreAchievement";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// export type QuizTestType = {
//   quizSubject : string;
// }
// export type ScoreAcheivementType = {
//   score : number;
// }

export type RootTabParamListAppNav = {
    Dashboard:undefined;
    Course:undefined;
    Quiz:undefined;
}

const Tab = createBottomTabNavigator<RootTabParamListAppNav>();
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
    <Tab.Navigator 
      screenOptions={({route}) => ({
        tabBarIcon: ({focused,color, size}) => {
          let iconName:string='home';
          if(route.name === 'Dashboard'){
            iconName = "desktop";
          }else if(route.name === "Course"){
            iconName = "folder";
          }else if(route.name === "Quiz"){
            iconName = "comments-o";
          }

          return (
            <View style={{
              backgroundColor:focused ? "#34d399" : "transparent",
              width:60,
              height:60,
              borderRadius:12,
              alignItems:"center",
              justifyContent:'center'
            }}>
              <Icon name={iconName} size={20} color={focused ? '#fff' : '#111'} />
            </View>
          )
        },
        tabBarShowLabel:false,
        tabBarStyle:{
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          position:"absolute",
          height:70
        },
        headerShown:false,
        animation:'fade'
      })}
    
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Course" component={Course} />
      <Tab.Screen name="Quiz" component={Quiz} />
      {/* <Tab.Screen name="QuizTest" component={QuizTest} options={{tabBarButton: () => null}} />
      <Tab.Screen name="ScoreAchievement" component={ScoreAchievement} options={{tabBarButton: () => null, tabBarStyle:{display:'none'}}} /> */}
      
    </Tab.Navigator>
  );
}

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MainTabs' options={{headerShown:false}} component={AppNavigation}/>
      <Stack.Screen name='QuizTest' options={{headerShown:false}} component={QuizTest}/>
      <Stack.Screen name='ScoreAchievement' options={{headerShown:false}} component={ScoreAchievement}/>
    </Stack.Navigator>
  );
}

export default StackNavigation;