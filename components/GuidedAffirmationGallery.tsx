import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React from "react"
import { GalleryPreviewData } from "@/constants/models/affirmationCategory"
import { Link } from "expo-router"

type GuidedAffirmationGalleryProps = {
  title: string
  previews: GalleryPreviewData[]
}

const GuidedAffirmationGallery = ({
  title,
  previews,
}: GuidedAffirmationGalleryProps) => {
  return (
    <View className="my-5 ">
      <View className="mb-2">
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={previews}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <Link href={`/affirmations/${item.id}`} asChild>
                <Pressable>
                  <View className="h-36 w-32 rounded-md mr-4 ">
                    <Image
                      source={item.image}
                      resizeMode="cover"
                      className="w-full h-full "
                    />
                  </View>
                </Pressable>
              </Link>
            )
          }}
          horizontal
        />
      </View>
    </View>
  )
}

export default GuidedAffirmationGallery

const styles = StyleSheet.create({})
