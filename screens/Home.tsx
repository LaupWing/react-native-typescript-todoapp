import {
   View,
   Text,
   TextInput,
   FlatList,
   TouchableOpacity,
   SafeAreaView,
} from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamsList } from "../App"
import Layout from "../components/Layout"
import { useState } from "react"
// import { todos as _todos } from "../dummyData.json"
import { todos as _todos } from "../dummyDataLong.json"
import { initialWindowMetrics, useSafeAreaInsets } from "react-native-safe-area-context"

export type NavigationProp = NativeStackNavigationProp<
   RootStackParamsList,
   "Home"
>

const Home = () => {
   const [todos, setTodos] = useState(_todos)
   const [newTodo, setNewTodo] = useState("")
   const insets = initialWindowMetrics.insets
   console.log("HOME", insets)
   console.log()

   // const addNewTodo = () => {
   //    setTodos([
   //       ...todos,
   //       {
   //          text: newTodo,
   //          finished: false,
   //       },
   //    ])
   // }

   return (
      <Layout>
         <View
            className="flex-1"
            style={{
               paddingBottom: insets.bottom,
            }}
         >
            <View className="bg-white rounded w-full border-[3px] border-indigo-600">
               <View className="w-full bg-indigo-600 p-2">
                  <Text className="text-white uppercase font-bold text-2xl tracking-wider">
                     todo app
                  </Text>
               </View>
               <FlatList
                  data={todos}
                  renderItem={({ item }) => (
                     <View className="py-2 border-b border-gray-300 last:border-0">
                        <Text>{item.text}</Text>
                     </View>
                  )}
                  keyExtractor={(item) => item.text}
               />
               <View className="flex flex-row border-t border-gray-300">
                  <TextInput
                     placeholder="Add a new todo"
                     className="px-2 py-1 flex-1"
                     onChangeText={setNewTodo}
                  />
                  <TouchableOpacity
                     className="bg-indigo-500 px-4 items-center justify-center"
                     // onPress={addNewTodo}
                  >
                     <Text className="text-white uppercase font-bold">add</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      </Layout>
   )
}
export default Home
