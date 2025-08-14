
import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'
import { ThemedView, ThemedText } from '@/components'

const About = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.title}>About Page</ThemedText>

      <Link href="/" style={styles.link}>
        <ThemedText>Go to Home</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})