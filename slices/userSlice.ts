import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserState {
   id: string
}

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
