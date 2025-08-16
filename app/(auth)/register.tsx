import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import { ThemedView, Spacer, ThemedText, ThemedButton } from '@/components'
import generalStyle from '@/styles/style'

const Register = () => {
  const handleSubmit = () => {
    console.log("Register submitted");
  };
  return (
    <ThemedView style={generalStyle.container}>

      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register an Account
      </ThemedText>
      <ThemedButton onPress={handleSubmit}>
        <ThemedText style={styles.textBtn}>REGISTER</ThemedText>
      </ThemedButton>
      <Spacer height={100} />
      <Link href="/login" replace>
        <ThemedText style={{ textAlign: "center" }}>
          Login instead
        </ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Register

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