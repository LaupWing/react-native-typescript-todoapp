import { LinearGradient } from "expo-linear-gradient"
import { FC, PropsWithChildren } from "react"
import { View } from "react-native"
import auth from "@react-native-firebase/auth"

const Layout:FC<PropsWithChildren> = ({ children }) => {
   console.log(auth().currentUser.displayName)
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
