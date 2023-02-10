import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { RootStackParamsList } from "../App"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type NavigationProp = NativeStackNavigationProp<
   RootStackParamsList,
   "Login"
>

const Login = () => {
   const navigation = useNavigation<NavigationProp>()
   return (
      <View>
         <Text>Login</Text>
         <Text onPress={() => navigation.navigate("Home")}>Go to home</Text>
      </View>
   )
}
export default Login
