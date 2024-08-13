import { StyleSheet, Text, View } from "react-native"
import React, { useEffect } from "react"
import { SplashScreen, Stack } from "expo-router"
import { useFonts } from "expo-font"
import TimerContextProvider from "@/context/TimerContext"

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Roboto-mono": require("@/assets/fonts/RobotoMono-Regular.ttf"),
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
    <TimerContextProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="meditate/[id]" options={{ headerShown: false }} />
        <Stack.Screen
          name="(modal)/adjust-meditation-duration"
          options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack>
    </TimerContextProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})
