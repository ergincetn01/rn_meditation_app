import { View, Text } from "react-native"
import React, { FC } from "react"
import { LinearGradient } from "expo-linear-gradient"
interface Props {
	children: any
	colors: [string, string, ...string[]]
}
const AppGradient: FC<Props> = ({ children, colors }) => {
	return (
		<LinearGradient className="flex-1" colors={colors}>
			<Text>{children}</Text>
		</LinearGradient>
	)
}

export default AppGradient
