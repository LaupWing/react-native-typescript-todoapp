import { 
   View, 
   Text,
   TextInput,
   FlatList,
   TouchableOpacity, 
   SafeAreaView,
   ScrollView
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

   {/* <View className="w-full bg-indigo-600 p-2">
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
   </View> */}
   return (
      // <Layout>
        // <View className="bg-white rounded w-full border-[3px] border-indigo-600">
         <ScrollView className="flex flex-col">
            {todos.map(todo => <Todo key={todo.text} item={todo}/>)}  
         </ScrollView>
            // <FlatList
            //    data={todos}
            //    className=""
            //    renderItem={({item})=> <Todo item={item}/>}
            //    keyExtractor={item => item.text}
            // />
       //  </View>
      // </Layout>
   )
}
export default Home


const Todo = ({item}) =>(
   <View className="py-2 border-b">
      <Text>
         {item.text}
      </Text>
   </View>
)