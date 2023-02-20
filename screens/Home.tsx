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
import Todo from "../components/Todo"
import { TodoType } from "../types"
import { useAppDispatch } from "../redux/hooks"
import { postTodo } from "../slices/userSlice"

export type NavigationProp = NativeStackNavigationProp<
   RootStackParamsList,
   "Home"
>

const Home = () => {
   const [todos, setTodos] = useState<TodoType[]>([])
   const dispatch = useAppDispatch()
   const [newTodo, setNewTodo] = useState("")

   const submitTodo = () => {
      setTodos([
         ...todos,
         {
            text: newTodo,
            finished: false,
         },
      ])
      setNewTodo("")
      dispatch(postTodo({
         text: newTodo,
         finished: false,
      }))
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
                  <Todo item={item}/>
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
                  onPress={submitTodo}
               >
                  <Text className="text-white uppercase font-bold">add</Text>
               </TouchableOpacity>
            </View>
         </View>
      </Layout>
   )
}
export default Home
