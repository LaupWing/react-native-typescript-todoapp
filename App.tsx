import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { View } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screens/Home"
import Login from "./screens/Login"
import { GoogleSignin } from "@react-native-google-signin/google-signin"
import { useEffect, useState } from "react"
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth"
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

export type RootStackParamsList = {
   Home: undefined
   Login: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>()
const Tab = createBottomTabNavigator()

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

   if(initializing){
      return null
   }

   return (
      <SafeAreaProvider>
         <NavigationContainer>
            <Stack.Navigator
               screenOptions={{
                  headerShown: false
               }}
               initialRouteName={user ? "Home": "Login"}
            >
               {user && <Stack.Screen 
                  name="Home"
                  component={Home}
               />}
               <Stack.Screen 
                  name="Login" 
                  component={Login}
               />
            </Stack.Navigator>
         </NavigationContainer>
      </SafeAreaProvider>
   )
}

export default App