import { ImageBackground, SafeAreaView, Text, View } from "react-native"
import "../global.css"
import beachImage from "@/assets/meditation-images/beach.webp"
import { StatusBar } from "expo-status-bar"
import CustomButton from "@/components/CustomButton"
import { useRouter } from "expo-router"
import AppGradient from "@/components/AppGradient"
const App = () => {
	const router = useRouter()
	return (
		<View className="flex-1">
			<ImageBackground
				className="flex-1"
				resizeMode="cover"
				source={beachImage}
			>
				<AppGradient colors={["rgba(0,0,0, 0.4)", "rgba(0,0,0, 0.8)"]}>
					<SafeAreaView className="py-4 flex-1 justify-between">
						<View>
							<Text className="text-center text-white text-4xl font-bold">
								Simple Meditation
							</Text>
							<Text className="text-center text-white text-regular text-2xl mt-3">
								Simplifying Meditation for everyone
							</Text>
						</View>
						<View>
							<CustomButton
								onPress={() => router.push("/nature-meditate")}
								title="Get Started"
							/>
						</View>
						<StatusBar style="light" />
					</SafeAreaView>
				</AppGradient>
			</ImageBackground>
		</View>
	)
}
export default App
