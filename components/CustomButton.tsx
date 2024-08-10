import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"

type buttonProps = {
  onPress: () => void
  title: string
  textStyles?: string
  containerStyles?: string
}

const CustomButton = ({
  title,
  onPress,
  textStyles,
  containerStyles,
}: buttonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`${containerStyles} bg-white min-h-[62px] rounded-xl items-center justify-center`}
      onPress={onPress}
    >
      <Text className={`${textStyles} font-semibold text-lg`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})
