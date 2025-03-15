import { View, Text, FlatList, Pressable, ImageBackground } from "react-native"
import React from "react"
import AppGradient from "@/components/AppGradient"
import { StatusBar } from "expo-status-bar"
import { MEDITATION_DATA } from "@/constants/MeditationData"
import MEDITATION_IMAGES from "@/constants/meditation-images"
import { LinearGradient } from "expo-linear-gradient"
import { useRouter } from "expo-router"

const NatureMeditate = () => {
	const router = useRouter()
	return (
		<View className="flex-1">
			<AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
				<View className="mb-6">
					<Text className="text-gray-200 mb-3 text-4xl font-bold text-left">
						Welcome, Ergin
					</Text>
					<Text className="text-left text-indigo-100 text-xl font-medium">
						Start your meditation practice
					</Text>
				</View>
				<View>
					<FlatList
						className="mb-20"
						data={MEDITATION_DATA}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => (
							<Pressable
								className="h-48 my-3 rounded-md overflow-hidden"
								onPress={() =>
									router.push(`/meditate/${item.id}`)
								}
							>
								<ImageBackground
									source={MEDITATION_IMAGES[item.id - 1]}
									resizeMode="cover"
									className="flex-1 justify-center rounded-lg"
								>
									<LinearGradient
										colors={[
											"transparent",
											"rgba(0,0,0, 0.8)",
										]}
										className="flex-1 justify-center items-center"
									>
										<Text className="text-gray-100 text-3xl text-center font-bold">
											{item.title}
										</Text>
									</LinearGradient>
								</ImageBackground>
							</Pressable>
						)}
						showsVerticalScrollIndicator
					/>
				</View>
			</AppGradient>
			<StatusBar style="light" />
		</View>
	)
}

export default NatureMeditate
