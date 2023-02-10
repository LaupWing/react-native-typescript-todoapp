import { LinearGradient } from "expo-linear-gradient"
import { FC, PropsWithChildren } from "react"
import { View } from "react-native"

const Layout:FC<PropsWithChildren> = ({ children }) => {
   return (
      // <LinearGradient style={{height: 100}} colors={["#6366f1", "#a855f7", "#ec4899"]}>
         <View className="flex-1">
            {children}
         </View>
      // </LinearGradient>
   )
}
export default Layout
