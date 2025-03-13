import { View, Text } from "react-native"
import React, { FC } from "react"
import { LinearGradient } from "expo-linear-gradient"
import Content from "./Content"
interface Props {
	children: any
	colors: [string, string, ...string[]]
}
const AppGradient: FC<Props> = ({ children, colors }) => {
	return (
		<LinearGradient className="flex-1" colors={colors}>
			<Content>{children}</Content>
		</LinearGradient>
	)
}

export default AppGradient
