import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors} from "../constants/Colors"

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme ?? 'light']
  return (
    <View style={styles.container}>
      <Stack screenOptions={
        {
          headerStyle: { backgroundColor: theme.navBackground },
          headerTitleStyle: { color: theme.title },
          headerTintColor: theme.iconColor,
          headerTitleAlign: 'center'
        }
      }>
        <Stack.Screen name="index" options={{ headerShown: true, title: "home"}}/>
        <Stack.Screen name="about" options={{ title: "About Us" }}/>
        <Stack.Screen name="contact" options={{ title: "Contact Us", headerShown: true }}/>
      </Stack>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})