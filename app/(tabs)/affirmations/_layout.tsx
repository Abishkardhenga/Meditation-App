import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { Stack } from "expo-router"

const AfirrmationLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[itemId]" options={{ headerShown: false }} />
    </Stack>
  )
}

export default AfirrmationLayout

const styles = StyleSheet.create({})
