import { View, Text, Pressable } from "react-native"
import React, { useContext } from "react"
import AppGradient from "@/components/AppGradient"
import { AntDesign } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import CustomButton from "@/components/CustomButton"
import { TimerContext } from "@/context/TimerContext"

const AdjustMeditate = () => {
	const router = useRouter()
	const { setSelectedDuration, setDuration, selectedDuration } =
		useContext(TimerContext)
	const handlePress = (d: number) => {
		setDuration(d)
		setSelectedDuration(d)
		router.back()
	}

	const adjustDurationData = [
		{ duration: 60 },
		{ duration: 180 },
		{ duration: 300 },
		{ duration: 600 },
		{ duration: 1200 },
	]
	return (
		<View className="flex-1 relative">
			<AppGradient colors={["#161b2e", "#873CF1", "#060433"]}>
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
						{adjustDurationData.map((b, idx) => {
							const isSelected =
								b.duration === selectedDuration ? true : false
							return (
								<CustomButton
									key={idx}
									title={`${(
										b.duration / 60
									).toString()} min`}
									containerStyles={`mb-4 justify-center ${
										isSelected
											? "bg-yellow-400"
											: "bg-white"
									}`}
									onPress={() => handlePress(b.duration)}
								/>
							)
						})}
					</View>
				</View>
			</AppGradient>
		</View>
	)
}

export default AdjustMeditate
