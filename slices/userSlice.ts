import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../redux/store"

// Define a type for the slice state
interface UserState {
   id: string
}

// Define the initial state using that type
const initialState: UserState = {
   id: undefined,
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

export const { 
   setUserId
} = userSlice.actions


export default userSlice.reducer
