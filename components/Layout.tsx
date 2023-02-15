import { LinearGradient } from "expo-linear-gradient"
import { FC, PropsWithChildren } from "react"
import { SafeAreaView, View } from "react-native"

const Layout:FC<PropsWithChildren> = ({ children }) => {
   return (
      <LinearGradient 
         className="justify-center items-center flex flex-1" 
         colors={["#6366f1", "#a855f7", "#ec4899"]}
      >
         <SafeAreaView className="flex-1 w-full px-6">
            {children}
         </SafeAreaView>
      </LinearGradient>
   )
}
export default Layout
