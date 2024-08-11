import { ScrollView, StyleSheet, Text, View } from "react-native"
import React from "react"
import AppGradient from "@/components/AppGradient"
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery"
import GuidedAffirmationGallery from "@/components/GuidedAffirmationGallery"

const Affirmation = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-3xl font-bold text-zinc-50">Affirmation</Text>
          <View>
            {AFFIRMATION_GALLERY.map((item) => (
              <GuidedAffirmationGallery
                key={item.title}
                title={item.title}
                previews={item.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  )
}

export default Affirmation

const styles = StyleSheet.create({})
