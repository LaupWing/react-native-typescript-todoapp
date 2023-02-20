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
import { useEffect, useState } from "react"
import Todo from "../components/Todo"
import { TodoType } from "../types"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { getTodos, postTodo } from "../slices/userSlice"
import { ActivityIndicator } from "react-native"

export type NavigationProp = NativeStackNavigationProp<
   RootStackParamsList,
   "Home"
>

const Home = () => {
   const { todos } = useAppSelector(state => state.user)
   const dispatch = useAppDispatch()
   const [newTodo, setNewTodo] = useState("")
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const initialize = async () =>{
         dispatch(getTodos())
      }
      initialize()
   }, [])
   
   const submitTodo = () => {
      setNewTodo("")
      dispatch(postTodo({
         text: newTodo,
         finished: false,
      }))
   }
   if(loading){
      return (
         <Layout>
            <ActivityIndicator 
               className="m-auto" 
               size={"large"} 
               color="white"
            />
         </Layout>
      )
   }

   return (
      <Layout>
         <View className="bg-white max-h-full rounded w-full border-[3px] border-indigo-600">
            <View className="w-full bg-indigo-600 p-2">
               <Text className="text-white uppercase font-bold text-2xl tracking-wider">
                  todo app
               </Text>
            </View>
            {/* <FlatList
               data={todos}
               renderItem={({ item }) => (
                  <Todo item={item}/>
               )}
               keyExtractor={(item) => item.text}
            /> */}
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
