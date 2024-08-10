import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import beachImage from "@/assets/meditation-images/beach.webp"
import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from "expo-status-bar"
import React from "react"
import CustomButton from "@/components/CustomButton"

const App = () => {
  return (
    <View className="flex-1 ">
      <StatusBar hidden style="light" />

      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1"
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
        >
          <SafeAreaView className="flex-1 mx-5 my-12 px-1 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-regular text-2xl mt-3 ">
                Simpliying meditaion for everyone
              </Text>
            </View>
            <View>
              <CustomButton
                title="Get Started"
                onPress={() => console.log("onPress button dubaye")}
              />
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
