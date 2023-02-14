import { 
   View, 
   Text,
   TextInput,
   FlatList,
   TouchableOpacity, 
   SafeAreaView
} from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamsList } from "../App"
import Layout from "../components/Layout"
import { useState } from "react"
// import { todos as _todos } from "../dummyData.json"
import { todos as _todos } from "../dummyDataLong.json"

export type NavigationProp = NativeStackNavigationProp<
   RootStackParamsList,
   "Home"
>

const Home = () => {
   const [todos, setTodos] = useState(_todos)

   return (
      <Layout>
         <SafeAreaView className="bg-white mt-[10vh] rounded w-full flex-1 flex flex-col mb-4 border-[3px] border-indigo-600">
            <View className="w-full bg-indigo-600 p-2">
               <Text className="text-white uppercase font-bold text-2xl tracking-wider">todo app</Text>
            </View>
            <View className="flex flex-row ">
               <TextInput
                  placeholder="Add a new todo"
                  className="px-2 py-1 flex-1"
               />
               <TouchableOpacity className="bg-indigo-500 px-4 items-center justify-center">
                  <Text className="text-white uppercase font-bold">add</Text>
               </TouchableOpacity>
            </View>
            <FlatList
               data={todos}
               className="overflow-y-auto"
               renderItem={({item})=>
                  <View className="py-2 border-b">
                     <Text>
                        {item.text}
                     </Text>
                  </View>
               }
               keyExtractor={item => item.text}
            />
         </SafeAreaView>
      </Layout>
   )
}
export default Home
