import { ImageBackground, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import { useLocalSearchParams } from "expo-router"
import { GalleryPreviewData } from "@/constants/models/affirmationCategory"
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery"
import AppGradient from "@/components/AppGradient"

const AffirmationPractice = () => {
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>()
  const { itemId } = useLocalSearchParams()
  useEffect(() => {
    for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
      const affirmationData = AFFIRMATION_GALLERY[i].data
      if (affirmationData) {
        const data = affirmationData.find((item) => item.id == Number(itemId))
        if (affirmationData) setAffirmation(data)
        return
      }
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
          <Text>Test</Text>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default AffirmationPractice

const styles = StyleSheet.create({})
