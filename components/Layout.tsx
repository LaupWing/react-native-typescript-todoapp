import { LinearGradient } from "expo-linear-gradient"
import { FC, PropsWithChildren } from "react"
import { SafeAreaView, View } from "react-native"
import { initialWindowMetrics } from "react-native-safe-area-context"

const Layout:FC<PropsWithChildren> = ({ children }) => {
   const insets = initialWindowMetrics.insets

   return (
      <View
         className="flex-1"
         style={{
            paddingBottom: insets.bottom
         }}
      >
         <View className="bg-red-600 flex-1">
            {children}
         </View>
         {/* <LinearGradient 
            className="justify-end items-end flex flex-1" 
            colors={["#6366f1", "#a855f7", "#ec4899"]}
         > */}
            {/* <View className="px-6 w-full h-20">
               {children}
            </View> */}
         {/* </LinearGradient> */}
      </View>
   )
}
export default Layout
