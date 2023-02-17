import { FC } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { FontAwesome, MaterialIcons } from "@expo/vector-icons"
import { TodoType } from "../types"

const Todo:FC<{item: TodoType}> = ({ 
   item
}) => {
   return (
      <View className="flex-row items-center border-b border-gray-300 last:border-0">
         <Text className="flex-1 px-2">{item.text}</Text>
         <TouchableOpacity className="border-l border-gray-300 w-10 flex items-center justify-center aspect-square">
            <MaterialIcons color={"green"} name="edit" size={24}/>
         </TouchableOpacity>
         <TouchableOpacity className="border-l border-gray-300 w-10 flex items-center justify-center aspect-square">
            <FontAwesome color={"red"} name="trash" size={24}/>
         </TouchableOpacity>
      </View>
   )
}
export default Todo
