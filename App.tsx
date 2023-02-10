import { NavigationContainer } from "@react-navigation/native"
import { View } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screens/Home"
import Login from "./screens/Login"

export type RootStackParamsList = {
   Home: undefined
   Login: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

export default function App() {
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