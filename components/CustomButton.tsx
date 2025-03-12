import {
	View,
	Text,
	TextStyle,
	ViewStyle,
	TouchableOpacity,
} from "react-native"
import React, { FC } from "react"

interface CustomButtonProps {
	onPress: () => void
	title: string
	textStyles?: string
	containerStyles?: string
}
const CustomButton: FC<CustomButtonProps> = ({
	onPress,
	title,
	containerStyles = "",
	textStyles = "",
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			className={`justify-center items-center bg-white rounded-xl min-h-[62px] ${containerStyles}`}
			activeOpacity={0.7}
		>
			<Text className={`font-semibold text-lg ${textStyles}`}>
				{title}
			</Text>
		</TouchableOpacity>
	)
}

export default CustomButton
