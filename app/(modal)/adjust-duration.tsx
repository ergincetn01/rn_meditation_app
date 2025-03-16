import { View, Text, Pressable } from "react-native"
import React, { useContext } from "react"
import AppGradient from "@/components/AppGradient"
import { AntDesign } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import CustomButton from "@/components/CustomButton"
import { TimerContext } from "@/context/TimerContext"

const AdjustMeditate = () => {
	const router = useRouter()
	const { setSelectedDuration, setDuration } = useContext(TimerContext)
	const handlePress = (d: number) => {
		setDuration(d)
		setSelectedDuration(d)
		router.back()
	}
	return (
		<View className="flex-1 relative">
			<AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
				<Pressable
					onPress={() => router.back()}
					className="absolute top-12 left-6 z-10"
				>
					<AntDesign name="leftcircleo" size={40} color={"#fff"} />
				</Pressable>

				<View className="justify-center h-full">
					<Text className="text-white text-3xl font-rmono mb-8 text-center">
						Adjust Meditation Duration
					</Text>
					<View>
						<CustomButton
							title="1 min"
							containerStyles="mb-4"
							onPress={() => handlePress(1 * 60)}
						/>
						<CustomButton
							title="3 min"
							containerStyles="mb-4"
							onPress={() => handlePress(3 * 60)}
						/>
						<CustomButton
							title="5 min"
							containerStyles="mb-4"
							onPress={() => handlePress(5 * 60)}
						/>
						<CustomButton
							title="10 min"
							containerStyles="mb-4"
							onPress={() => handlePress(10 * 60)}
						/>
						<CustomButton
							title="20 min"
							containerStyles="mb-4"
							onPress={() => handlePress(20 * 60)}
						/>
						<CustomButton
							title="30 min"
							containerStyles="mb-4"
							onPress={() => handlePress(30 * 60)}
						/>
					</View>
				</View>
			</AppGradient>
		</View>
	)
}

export default AdjustMeditate
