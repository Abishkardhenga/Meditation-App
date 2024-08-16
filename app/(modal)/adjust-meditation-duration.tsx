import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native"
import React, { useContext } from "react"
import AppGradient from "@/components/AppGradient"
import { StatusBar } from "expo-status-bar"
import { AntDesign } from "@expo/vector-icons"
import { router } from "expo-router"
import CustomButton from "@/components/CustomButton"
import { TimerContext } from "@/context/TimerContext"

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext(TimerContext)
  const handlePress = (duration: number) => {
    setDuration(duration)
    router.back()
  }
  return (
    <SafeAreaView className="flex-1">
      <StatusBar hidden />
      <View className="flex-1 relative ">
        <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
          <Pressable
            className="absolute top-8 left-6 z-10"
            onPress={() => router.back()}
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <View className="justify-center h-full">
            <Text className="text-center font-bold text-3xl text-white mb-8">
              Adjust Your Meditation Duration
            </Text>
            <View>
              <CustomButton
                title="10 seconds "
                onPress={() => handlePress(10)}
                containerStyles="mb-5"
              />
              <CustomButton
                title="5 minutes "
                onPress={() => handlePress(5 * 60)}
                containerStyles="mb-5"
              />
              <CustomButton
                title="10 minutes "
                onPress={() => handlePress(10 * 60)}
                containerStyles="mb-5"
              />
              <CustomButton
                title="15 minutes "
                onPress={() => handlePress(15 * 60)}
                containerStyles="mb-5"
              />
            </View>
          </View>
        </AppGradient>
      </View>
    </SafeAreaView>
  )
}

export default AdjustMeditationDuration
