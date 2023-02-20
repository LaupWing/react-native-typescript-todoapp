import type { TodoType } from "../types"
import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit"
import { store } from "../redux/store"
import firestore from "@react-native-firebase/firestore"

interface UserState {
   id: string
   todos: TodoType[]
}

const initialState: UserState = {
   id: undefined,
   todos: []
}

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setUserId(state, action: PayloadAction<string>){
         state.id = action.payload
      }
   },
})

export const getTodos = 
   () => async () => {
      
   }

export const postTodo = 
   (todo: TodoType) => async (dipatch: Dispatch, getState: typeof store.getState) => {
      const { id } = getState().user
      const newTodo = await firestore()
         .collection("users")
         .doc(id)
         .collection("todos")
         .doc()
         .set(todo)

      console.log(newTodo)
   }

export const { 
   setUserId
} = userSlice.actions


export default userSlice.reducer
