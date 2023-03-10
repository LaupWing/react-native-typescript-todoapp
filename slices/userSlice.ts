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
      },
      removeTodo(state, action: PayloadAction<string>){
         state.todos = [...state.todos].filter(todo => todo.id !== action.payload)
      },
      setTodos(state, action: PayloadAction<TodoType[]>){
         state.todos = action.payload
      },
      updateTodos(state, action: PayloadAction<{id: string, updatedText: string}>){
         const {id, updatedText} = action.payload
         state.todos = [...state.todos].map(x => x.id === id ? ({
            ...x,
            text: updatedText
         }) : x)
      },
   },
})

export const getTodos = 
   () => async (dispatch: Dispatch, getState: typeof store.getState) => {
      const { id } = getState().user
      
      const todos = await firestore()
         .collection("users")
         .doc(id)
         .collection("todos")
         .get()
      dispatch(setTodos(
         todos.docs.map(todo => ({
            ...todo.data(),
            id: todo.id
         })) as TodoType[]
      ))
   }

export const postTodo = 
   (todo: TodoType) => async (dispatch: Dispatch, getState: typeof store.getState) => {
      const { id } = getState().user
      const ref = firestore()
         .collection("users")
         .doc(id)
         .collection("todos")
         .doc()
      dispatch(addTodo({...todo, id: ref.id}))
      
      ref.set(todo)
   }

export const deleteTodo = 
   (todoId: string) => async (dispatch: Dispatch, getState: typeof store.getState) => {
      const { id } = getState().user
      dispatch(removeTodo(todoId))
      
      await firestore()
         .collection("users")
         .doc(id)
         .collection("todos")
         .doc(todoId)
         .delete()
   }

export const patchTodo = 
   (todoId: string, updatedText: string) => 
   async (dispatch: Dispatch, getState: typeof store.getState) => {
      const { id } = getState().user
      dispatch(updateTodos({id: todoId, updatedText}))

      await firestore()
         .collection("users")
         .doc(id)
         .collection("todos")
         .doc(todoId)
         .update({
            text: updatedText
         })
   }

export const { 
   setUserId,
   addTodo,
   setTodos,
   removeTodo,
   updateTodos
} = userSlice.actions


export default userSlice.reducer
