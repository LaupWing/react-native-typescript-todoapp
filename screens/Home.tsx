import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamsList } from "../App"
import Layout from "../components/Layout"

export type NavigationProp = NativeStackNavigationProp<
   RootStackParamsList,
   "Home"
>

const Home = () => {
   const navigation = useNavigation<NavigationProp>()
   return (
      <Layout>
         <Text className="text-red-400">Home</Text>
         <Text onPress={() => navigation.navigate("Login")}>Go to login</Text>
      </Layout>
   )
}
export default Home
