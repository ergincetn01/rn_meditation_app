import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"

const Content = ({ children }: { children: any }) => {
	return <SafeAreaView className="flex-1 px-5">{children}</SafeAreaView>
}

export default Content
