import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

import { ThemedView, Spacer, ThemedText, ThemedButton } from '@/components'
import generalStyle from '@/styles/style'

const Login = () => {
  const handleSubmit = () => {
    console.log("Login submitted");
  };
  return (
    <ThemedView style={generalStyle.container}>

      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>
      <ThemedButton onPress={handleSubmit}>
        <Text style={styles.textBtn}>LOGIN</Text>
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
  textBtn: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "white"
  }
})