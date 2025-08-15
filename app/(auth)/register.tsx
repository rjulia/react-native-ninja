import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import { ThemedView, Spacer, ThemedText } from '@/components'
import generalStyle from '@/styles/style'

const Register = () => {
  return (
    <ThemedView style={generalStyle.container}>

      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register an Account
      </ThemedText>

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
})