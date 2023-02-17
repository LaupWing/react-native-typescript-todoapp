import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { RootStackParamsList } from "../App"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import Layout from "../components/Layout"
import { GoogleSigninButton } from "@react-native-google-signin/google-signin"

export type NavigationProp = NativeStackNavigationProp<
   RootStackParamsList,
   "Login"
>

const Login = () => {
   return (
      <Layout>
         <Text>Login</Text>
         <GoogleSigninButton
            style={{ width: 300, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => {}}
         />
      </Layout>
   )
}
export default Login
