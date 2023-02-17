import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { RootStackParamsList } from "../App"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import Layout from "../components/Layout"
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin"
import auth from "@react-native-firebase/auth"

export type NavigationProp = NativeStackNavigationProp<
   RootStackParamsList,
   "Login"
>

const Login = () => {
   GoogleSignin.configure({
      webClientId: "1088828136827-qu7hd60qceh11p586okglsam3g62ess1.apps.googleusercontent.com"
   })
   const navigation = useNavigation()

   const onGoogleButtonPress = async () => {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
      const { idToken } = await GoogleSignin.signIn()
      const googleCredential = auth.GoogleAuthProvider.credential(idToken)

      auth().signInWithCredential(googleCredential)
      console.log(auth().currentUser)
   }
   

   return (
      <Layout>
         <Text>Login</Text>
         <GoogleSigninButton
            style={{ width: 320, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={onGoogleButtonPress}
         />
      </Layout>
   )
}
export default Login
