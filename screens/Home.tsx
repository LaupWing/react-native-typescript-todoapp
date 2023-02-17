import {
   View,
   Text,
   TextInput,
   FlatList,
   TouchableOpacity
} from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamsList } from "../App"
import Layout from "../components/Layout"
import { useState } from "react"
import { FontAwesome, MaterialIcons } from "@expo/vector-icons"

export type NavigationProp = NativeStackNavigationProp<
   RootStackParamsList,
   "Home"
>

const Home = () => {
   const [todos, setTodos] = useState([])
   const [newTodo, setNewTodo] = useState("")

   const addNewTodo = () => {
      setTodos([
         ...todos,
         {
            text: newTodo,
            finished: false,
         },
      ])
      setNewTodo("")
   }

   return (
      <Layout>
         <View className="bg-white max-h-full rounded w-full border-[3px] border-indigo-600">
            <View className="w-full bg-indigo-600 p-2">
               <Text className="text-white uppercase font-bold text-2xl tracking-wider">
                  todo app
               </Text>
            </View>
            <FlatList
               data={todos}
               renderItem={({ item }) => (
                  <View className="flex-row items-center border-b border-gray-300 last:border-0">
                     <Text className="flex-1 px-2">{item.text}</Text>
                     <TouchableOpacity className="border-l border-gray-300 w-10 flex items-center justify-center aspect-square">
                        <MaterialIcons color={"green"} name="edit" size={24}/>
                     </TouchableOpacity>
                     <TouchableOpacity className="border-l border-gray-300 w-10 flex items-center justify-center aspect-square">
                        <FontAwesome color={"red"} name="trash" size={24}/>
                     </TouchableOpacity>
                  </View>
               )}
               keyExtractor={(item) => item.text}
            />
            <View className="flex flex-row border-t border-gray-300">
               <TextInput
                  placeholder="Add a new todo"
                  className="px-2 py-1 flex-1"
                  onChangeText={setNewTodo}
                  value={newTodo}
               />
               <TouchableOpacity
                  className="bg-indigo-500 px-4 items-center justify-center"
                  onPress={addNewTodo}
               >
                  <Text className="text-white uppercase font-bold">add</Text>
               </TouchableOpacity>
            </View>
         </View>
      </Layout>
   )
}
export default Home
