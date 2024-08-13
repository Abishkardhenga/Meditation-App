import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React, { useEffect, useState } from "react"
import meditationImage from "@/constants/meditation-image"
import AppGradient from "@/components/AppGradient"
import { router, useLocalSearchParams } from "expo-router"
import AntDesign from "@expo/vector-icons/AntDesign"
import CustomButton from "@/components/CustomButton"

const Meditate = () => {
  const { id } = useLocalSearchParams()
  const [secondRemaining, setSecondRemaining] = useState(10)
  const [isMeditating, setMeditating] = useState(false)

  useEffect(() => {
    let timerId: any
    if (secondRemaining === 0) {
      setMeditating(false)
      return
    }
    if (isMeditating) {
      timerId = setTimeout(() => {
        setSecondRemaining(secondRemaining - 1)
      }, 1000)

      return () => {
        clearTimeout(timerId)
      }
    }
  }, [isMeditating, secondRemaining])

  const formatedTimeMinutes = String(Math.floor(secondRemaining / 60)).padStart(
    2,
    "0"
  )
  const formatedTimeSeconds = String(secondRemaining % 60).padStart(2, "0")

  return (
    <View className="flex-1">
      <ImageBackground
        source={meditationImage[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1 w-full h-full"
      >
        <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-4 left-4 z-10"
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <View className="justify-center flex-1">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center ">
              <Text className="text-4xl text-blue-800 font-rmono">
                {formatedTimeMinutes}:{formatedTimeSeconds}
              </Text>
            </View>
          </View>
          <View className="mb-5 ">
            <CustomButton
              title="Start Meditation "
              onPress={() => {
                setMeditating(!isMeditating)
                console.log("setMediatiing ", isMeditating)
              }}
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default Meditate
const styles = StyleSheet.create({})
