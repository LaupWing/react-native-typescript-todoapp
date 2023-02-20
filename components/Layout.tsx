import { LinearGradient } from "expo-linear-gradient"
import { FC, PropsWithChildren, useEffect } from "react"
import { View } from "react-native"
import auth from "@react-native-firebase/auth"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { setUserId } from "../slices/userSlice"

const Layout:FC<PropsWithChildren> = ({ children }) => {
   const dispatch = useAppDispatch()
   const { id } = useAppSelector(state => state.user)

   useEffect(() => {
      if(!id && auth().currentUser){
         dispatch(setUserId(auth().currentUser.uid))
      }
   }, [])

   return (
      <View className="flex-1">
         <LinearGradient 
            className="justify-start items-center px-6 py-8 flex flex-1" 
            colors={["#6366f1", "#a855f7", "#ec4899"]}
         >
            <View className="flex-1 w-full">
               {children}
            </View>
         </LinearGradient>
      </View>
   )
}
export default Layout
