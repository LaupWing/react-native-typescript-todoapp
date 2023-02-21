import { FC, useState } from "react"
import { View, Text, TouchableOpacity, TextInput } from "react-native"
import { FontAwesome, MaterialIcons } from "@expo/vector-icons"
import { TodoType } from "../types"
import { useAppDispatch } from "../redux/hooks"
import { deleteTodo } from "../slices/userSlice"

const Todo:FC<{item: TodoType}> = ({ 
   item
}) => {
   const dispatch = useAppDispatch()
   const [edit, setEdit] = useState(false)

   return (
      <View className="flex-row items-center border-b border-gray-300 last:border-0">
         {edit 
            ? (
               <TextInput value={item.text} className="bg-gray-100 flex-1 mx-1 px-2 rounded" />
            ) : (
               <Text className="flex-1 px-2">{item.text}</Text>
         )}
         <Buttons id={item.id}/>
      </View>
   )
}
export default Todo


const Buttons = ({id}) => {
   const dispatch = useAppDispatch()
   const onPressDelete = () => {
      dispatch(deleteTodo(id))
   }
   return (
      <View 
         className="flex-row transform translate-x-full"
         
      >
         <View className="flex-row translate-x-20">
            <TouchableOpacity className="border-l border-gray-300 w-10 flex items-center justify-center aspect-square">
               <MaterialIcons color={"green"} name="edit" size={24}/>
            </TouchableOpacity>
            <TouchableOpacity 
               className="border-l border-gray-300 w-10 flex items-center justify-center aspect-square"
               onPress={onPressDelete}
            >
               <FontAwesome color={"red"} name="trash" size={24}/>
            </TouchableOpacity>
         </View>
         <View className="flex-row">
            <TouchableOpacity className="border-l border-gray-300 w-10 flex items-center justify-center aspect-square">
               <FontAwesome color={"green"} name="check" size={24}/>
            </TouchableOpacity>
            <TouchableOpacity 
               className="border-l border-gray-300 w-10 flex items-center justify-center aspect-square"
               onPress={onPressDelete}
            >
               <FontAwesome color={"red"} name="close" size={24}/>
            </TouchableOpacity>
         </View>
      </View>
   )
}