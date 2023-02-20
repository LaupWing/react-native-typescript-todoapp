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
      },
      addTodo(state, action: PayloadAction<TodoType>){
         state.todos = [...state.todos, action.payload]
      }
   },
})

export const getTodos = 
   () => async (dispatch: Dispatch, getState: typeof store.getState) => {
      const { id } = getState().user
      console.log(id)
      const todos = await firestore()
         .collection("users")
         .doc(id)
         .collection("todos")
         .get()
      
      console.log(todos.docs)
   }

export const postTodo = 
   (todo: TodoType) => async (dispatch: Dispatch, getState: typeof store.getState) => {
      const { id } = getState().user
      await firestore()
         .collection("users")
         .doc(id)
         .collection("todos")
         .doc()
         .set(todo)
      dispatch(addTodo(todo))
   }

export const { 
   setUserId,
   addTodo
} = userSlice.actions


export default userSlice.reducer
