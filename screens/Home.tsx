import { 
   View, 
   Text,
   TextInput,
   TouchableOpacity, 
} from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamsList } from "../App"
import Layout from "../components/Layout"

export type NavigationProp = NativeStackNavigationProp<
   RootStackParamsList,
   "Home"
>

const Home = () => {
   return (
      <Layout>
         <View className="bg-white mt-[10vh] rounded w-full border-[3px] border-indigo-600">
            <View className="w-full bg-indigo-600 p-2">
               <Text className="text-white uppercase font-bold text-2xl tracking-wider">todo app</Text>
            </View>
            <View className="flex flex-row">
               <TextInput
                  placeholder="Add a new todo"
                  className="px-2 py-1 flex-1"
               />
               <TouchableOpacity className="bg-indigo-500 px-4 items-center justify-center">
                  <Text className="text-white uppercase font-bold">add</Text>
               </TouchableOpacity>
            </View>
         </View>
      </Layout>
   )
}
export default Home
