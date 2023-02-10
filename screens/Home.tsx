import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamsList } from "../App"

export type NavigationProp = NativeStackNavigationProp<
   RootStackParamsList,
   "Home"
>

const Home = () => {
   const navigation = useNavigation<NavigationProp>()
   return (
      <View className="bg-red-400">
         <Text className="text-red-400">Home</Text>
         <Text onPress={() => navigation.navigate("Login")}>Go to login</Text>
      </View>
   )
}
export default Home
