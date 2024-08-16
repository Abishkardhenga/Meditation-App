import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import React from "react"
import AppGradient from "@/components/AppGradient"
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery"
import GuidedAffirmationGallery from "@/components/GuidedAffirmationGallery"
import uuid from "react-native-uuid"

const Affirmation = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <Text className="text-3xl font-bold text-zinc-50">Affirmation</Text>
        <View>
          <FlatList
            data={AFFIRMATION_GALLERY}
            keyExtractor={(ok) => {
              return String(uuid.v4())
            }}
            renderItem={({ item, index }) => {
              return (
                <GuidedAffirmationGallery
                  key={index}
                  title={item.title}
                  previews={item.data}
                />
              )
            }}
          />
        </View>
      </AppGradient>
    </View>
  )
}

export default Affirmation

const styles = StyleSheet.create({})
