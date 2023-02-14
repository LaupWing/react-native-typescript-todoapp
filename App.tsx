import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { ScrollView, View, Text } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screens/Home"
import Login from "./screens/Login"
import { GoogleSignin } from "@react-native-google-signin/google-signin"
import { useEffect, useState } from "react"
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth"
import {todos} from "./dummyDataLong.json"

export type RootStackParamsList = {
   Home: undefined
   Login: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

const App = () => {
   const [initializing, setInitializing] = useState<boolean>(true)
   const [user, setUser] = useState<FirebaseAuthTypes.User>(null)

   GoogleSignin.configure({
      webClientId: "1088828136827-qu7hd60qceh11p586okglsam3g62ess1.apps.googleusercontent.com"
   })

   useEffect(() => {
      const subscriber = auth().onAuthStateChanged(user => {
         setUser(user)
         if(initializing){
            setInitializing(false)
         }
      })
      return subscriber
   }, [])

   return (
      <ScrollView>
         {todos.map(todo => <Todo key={todo.text} item={todo}/>)}  
      </ScrollView>
      // <NavigationContainer>
      //    <Stack.Navigator
      //       screenOptions={{
      //          headerShown: false
      //       }}
      //    >
      //       <Stack.Screen 
      //          name="Home" 
      //          component={Home}
      //       />
      //       <Stack.Screen 
      //          name="Login" 
      //          component={Login}
      //       />
      //    </Stack.Navigator>
      // </NavigationContainer>
   )
}

export default App

const Todo = ({item}) =>(
   <View className="py-2 border-b">
      <Text>
         {item.text}
      </Text>
   </View>
)