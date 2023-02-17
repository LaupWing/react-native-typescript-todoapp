import { LinearGradient } from "expo-linear-gradient"
import { FC, PropsWithChildren } from "react"
import { SafeAreaView, View } from "react-native"
import { initialWindowMetrics } from "react-native-safe-area-context"

const Layout:FC<PropsWithChildren> = ({ children }) => {
   const insets = initialWindowMetrics.insets

   return (
      <LinearGradient 
         className="justify-center items-center flex flex-1" 
         colors={["#6366f1", "#a855f7", "#ec4899"]}
         style={{
            paddingBottom: insets.bottom
         }}
      >
         <SafeAreaView className="flex-1 w-full px-6">
            {children}
         </SafeAreaView>
      </LinearGradient>
   )
}
export default Layout
