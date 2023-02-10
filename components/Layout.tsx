import { LinearGradient } from "expo-linear-gradient"
import { FC, PropsWithChildren } from "react"

const Layout:FC<PropsWithChildren> = ({ children }) => {
   return (
      <LinearGradient className="flex-1" colors={["#6366f1", "#a855f7", "#ec4899"]}>
         {children}
      </LinearGradient>
   )
}
export default Layout
