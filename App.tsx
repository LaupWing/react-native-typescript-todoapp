import { NavigationContainer } from "@react-navigation/native"
import { View } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screens/Home"
import Login from "./screens/Login"
import { GoogleSignin } from "@react-native-google-signin/google-signin"
import { useEffect } from "react"

export type RootStackParamsList = {
   Home: undefined
   Login: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

export default function App() {
   GoogleSignin.configure({
      webClientId: "1088828136827-qu7hd60qceh11p586okglsam3g62ess1.apps.googleusercontent.com"
   })

   useEffect

   return (
      <View className="flex-1">
         <NavigationContainer>
            <Stack.Navigator>
               <Stack.Group
                  screenOptions={{
                     headerShown: false
                  }}
               >
                  <Stack.Screen 
                     name="Home" 
                     component={Home}
                  />
                  <Stack.Screen 
                     name="Login" 
                     component={Login}
                  />
               </Stack.Group>
            </Stack.Navigator>
         </NavigationContainer>
      </View>
   )
}