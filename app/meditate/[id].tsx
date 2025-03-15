import { View, Text, ImageBackground, Pressable } from "react-native"
import React, { useEffect, useState } from "react"
import MEDITATION_IMAGES from "@/constants/meditation-images"
import { AntDesign } from "@expo/vector-icons"
import AppGradient from "@/components/AppGradient"
import { useLocalSearchParams, useRouter } from "expo-router"
import CustomButton from "@/components/CustomButton"
const Meditate = () => {
	const router = useRouter()
	const { id } = useLocalSearchParams()
	const [isMeditating, setIsMeditating] = useState<boolean>(false)

	const [secRemaining, setSecRemaining] = useState<number>(10)
	useEffect(() => {
		let timerId: NodeJS.Timeout

		if (secRemaining === 0) {
			setIsMeditating(false)
			return
		}

		if (isMeditating) {
			timerId = setTimeout(() => {
				setSecRemaining(secRemaining - 1)
			}, 1000)
		}

		return () => {
			clearTimeout(timerId)
		}
	}, [secRemaining, isMeditating])
	return (
		<View className="flex-1">
			<ImageBackground
				source={MEDITATION_IMAGES[Number(id) - 1]}
				resizeMode="cover"
				className="flex-1"
			>
				<AppGradient colors={["#rgba(0,0,0, 0.3)", "rgba(0,0,0,0.9)"]}>
					<Pressable
						onPress={() => router.back()}
						className="absolute top-16 left-6 z-10"
					>
						<AntDesign
							name="leftcircleo"
							size={40}
							color={"#fff"}
						/>
					</Pressable>
					<View className="justify-center flex-1">
						<View className="justify-center rounded-full bg-neutral-200 mx-auto w-44 h-44 ">
							<Text className="text-center text-blue-800 text-4xl">
								00.{secRemaining}
							</Text>
						</View>
					</View>
					<View className="mb-5">
						<CustomButton
							title="Start"
							onPress={() => setIsMeditating(!isMeditating)}
						/>
					</View>
				</AppGradient>
			</ImageBackground>
		</View>
	)
}

export default Meditate
