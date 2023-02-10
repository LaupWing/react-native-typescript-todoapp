import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { NavigationContainer } from "@react-navigation/native"
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
      <NavigationContainer>
         <View className="flex-1 bg-red-400">
            {/* <LinearGradient className="flex-1" colors={["#6366f1", "#a855f7", "#ec4899"]}>
               <Text>Open up App.js to start working on your app!</Text>
               <StatusBar style="auto" />
            </LinearGradient> */}
            <Stack.Navigator>
               <Stack.Screen name="Home" component={Home}/>
               <Stack.Screen name="Login" component={Login}/>
            </Stack.Navigator>
         </View>
      </NavigationContainer>
   )
}