import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React, { useEffect, useState } from "react"
import { router, useLocalSearchParams } from "expo-router"
import { GalleryPreviewData } from "@/constants/models/affirmationCategory"
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery"
import AppGradient from "@/components/AppGradient"
import AntDesign from "@expo/vector-icons/AntDesign"

const AffirmationPractice = () => {
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>()
  const [sentences, setSentences] = useState<string[]>([])
  const { itemId } = useLocalSearchParams()
  useEffect(() => {
    for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
      const affirmationData = AFFIRMATION_GALLERY[i].data
      const data = affirmationData.find((item) => {
        console.log("this is item id ", item.id, itemId)
        return item.id == Number(itemId)
      })
      if (data) setAffirmation(data)
      console.log("data", data)
      const textArray = data!.text!.split(".")
      if (textArray![textArray!.length - 1] === " ") {
        textArray.pop()
      }
      console.log("this is text array", textArray)
      setSentences(textArray)
      return
    }
  }, [])
  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
          <Pressable
            className="absolute top-16 left-6 z-10 "
            onPress={() => router.back()}
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="h-4/5">
                {sentences.map((sentence, key) => (
                  <Text className="text-white text-3xl mb-12 font-bold text-center">
                    {sentence}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default AffirmationPractice

const styles = StyleSheet.create({})
