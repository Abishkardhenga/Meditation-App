import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React, { useContext, useEffect, useState } from "react"
import meditationImage from "@/constants/meditation-image"
import AppGradient from "@/components/AppGradient"
import { router, useLocalSearchParams } from "expo-router"
import AntDesign from "@expo/vector-icons/AntDesign"
import CustomButton from "@/components/CustomButton"
import { Audio } from "expo-av"
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/meditation-data"
import { TimerContext } from "@/context/TimerContext"

const Meditate = () => {
  const { id } = useLocalSearchParams()

  const { duration: secondRemaining, setDuration } = useContext(TimerContext)
  // const [secondRemaining, setSecondRemaining] = useState(10)
  const [isMeditating, setMeditating] = useState(false)
  const [audioPlaying, setAudioPlaying] = useState(false)
  const [audioSound, setSound] = useState<Audio.Sound>()

  useEffect(() => {
    let timerId: any
    if (secondRemaining === 0) {
      setMeditating(false)
      return
    }
    if (isMeditating) {
      timerId = setTimeout(() => {
        setDuration(secondRemaining - 1)
      }, 1000)

      return () => {
        clearTimeout(timerId)
      }
    }
  }, [isMeditating, secondRemaining])

  const handleAdjustDuration = () => {
    if (isMeditating) toggleMeditationSessionStatus()
    router.push("/(modal)/adjust-meditation-duration")
  }

  const toggleMeditationSessionStatus = async () => {
    if (secondRemaining === 0) setDuration(10)
    setMeditating(true)
    await toggleSound()
  }

  useEffect(() => {
    return () => {
      setDuration(10)
      audioSound?.unloadAsync()
    }
  }, [audioSound])

  const initializeSound = async () => {
    const soundFile = MEDITATION_DATA[Number(id) - 1].audio
    console.log("soundfuile ", soundFile)
    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[soundFile])
    console.log("audio files", AUDIO_FILES[soundFile])
    setSound(sound)
    return sound
  }

  const toggleSound = async () => {
    const sound = audioSound ? audioSound : await initializeSound()

    const status = await sound?.getStatusAsync()

    if (status?.isLoaded && !audioPlaying) {
      await sound?.playAsync()
      setAudioPlaying(true)
    } else {
      await sound?.pauseAsync()
      setAudioPlaying(false)
    }
  }

  const formattedTimeMinutes = String(
    Math.floor(secondRemaining / 60)
  ).padStart(2, "0")
  const formattedTimeSeconds = String(secondRemaining % 60).padStart(2, "0")

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
              <Text className="text-4xl text-blue-800 ">
                {formattedTimeMinutes}:{formattedTimeSeconds}
              </Text>
            </View>
          </View>
          <View className="mb-5 ">
            <CustomButton
              title="Adjust Duration"
              onPress={handleAdjustDuration}
            />
            <CustomButton
              title={isMeditating ? "Stop" : "Start Meditation"}
              onPress={toggleMeditationSessionStatus}
              containerStyles="mt-5"
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default Meditate
const styles = StyleSheet.create({})
