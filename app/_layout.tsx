import { StyleSheet, Text, View } from "react-native"
import React, { useEffect } from "react"
import { SplashScreen, Stack } from "expo-router"
import { useFonts } from "expo-font"

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    RobotoMono: require("@/assets/fonts/RobotoMono-Regular.ttf"),
  })
  useEffect(() => {
    if (error) throw error
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, error])
  if (!fontsLoaded) return null
  if (!fontsLoaded && !error) return null
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="meditate/[id]" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})
