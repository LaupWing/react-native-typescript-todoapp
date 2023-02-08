import { GoogleSignin } from "@react-native-google-signin/google-signin"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import auth from "@react-native-firebase/auth"
import {FirebaseAuthTypes} from "@react-native-firebase/auth"
import Home from "./screens/Home"
import Login from "./screens/Login"
import { LinearGradient } from "expo-linear-gradient"

export type RootStackParamsList = {
   Home: undefined
   Login: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

GoogleSignin.configure({
   webClientId: "1088828136827-qu7hd60qceh11p586okglsam3g62ess1.apps.googleusercontent.com"
})

export default function App() {
   const onAuthStateChanged:FirebaseAuthTypes.AuthListenerCallback = (user) => {
      console.log(user)
   }

   useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
      return subscriber
   }, [])

   return (
      <NavigationContainer>
         <LinearGradient colors={["#6366f1", "#a855f7", "#ec4899"]}>
            <Stack.Navigator>
               <Stack.Screen name="Home" component={Home}/>
               <Stack.Screen name="Login" component={Login}/>
            </Stack.Navigator>
         </LinearGradient>
      </NavigationContainer>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
})
