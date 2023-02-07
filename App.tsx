import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StyleSheet, Text, View } from "react-native"
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
         <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Login" component={Login}/>
         </Stack.Navigator>
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
