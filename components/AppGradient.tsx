import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { LinearGradient } from "expo-linear-gradient"
import Content from "./Content"

type AppGradientTypess = {
  children: any
  colors: string[]
}

const AppGradient = ({ children, colors }: AppGradientTypess) => {
  return (
    <LinearGradient colors={colors} className="flex-1 ">
      <Content>{children}</Content>
    </LinearGradient>
  )
}

export default AppGradient

const styles = StyleSheet.create({})
