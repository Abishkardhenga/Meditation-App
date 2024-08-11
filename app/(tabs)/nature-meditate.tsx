import {
  FlatList,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React from "react"
import AppGradient from "@/components/AppGradient"
import { StatusBar } from "expo-status-bar"
import { MEDITATION_DATA } from "@/constants/meditation-data"
import meditationImage from "@/constants/meditation-image"
import { LinearGradient } from "expo-linear-gradient"

const NatureMeditate = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 ">
        <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Welcome Starven
          </Text>
          <Text className="text-indigo-100 text-xl font-medium ">
            Start Your Meditaion Practice
          </Text>
          <View>
            <FlatList
              className="mb-20"
              data={MEDITATION_DATA}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Pressable
                  className="h-48 rounded-md overflow-hidden my-3"
                  onPress={() => console.log("ok")}
                >
                  <ImageBackground
                    source={meditationImage[item.id - 1]}
                    resizeMode="cover"
                    className="flex-1 rounded-lg justify-center "
                  >
                    <LinearGradient
                      colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
                      className="flex-1 justify-center items-center "
                    >
                      <Text className="text-gray-100 text-3xl text-center font-bold ">
                        {item.title}
                      </Text>
                    </LinearGradient>
                  </ImageBackground>
                </Pressable>
              )}
            />
          </View>
        </AppGradient>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  )
}

export default NatureMeditate

const styles = StyleSheet.create({})
