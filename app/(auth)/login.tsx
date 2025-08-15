import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import { ThemedView, Spacer, ThemedText } from '@/components'
import generalStyle from '@/styles/style'
import ThemedButton from '@/components/ThemedButton'

const Login = () => {
  return (
    <ThemedView style={generalStyle.container}>

      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>
      <ThemedButton onPress={() => {console.log("Login pressed")}}>
        <ThemedText>Login</ThemedText>
      </ThemedButton>
      <Spacer height={100} />
      <Link href="/register" replace>
        <ThemedText style={{ textAlign: "center" }}>
          Register instead
        </ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30
  },
})